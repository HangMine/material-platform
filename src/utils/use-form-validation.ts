/* eslint-disable @typescript-eslint/no-empty-function */
import {
  shallowReactive, Ref, computed, watch,
} from 'vue';
import { F } from 'ts-toolbelt';
import { Validator } from '@/typings/validator.d';
import AppError, { ValidateError } from './error';
import { validator2ElemRules } from './validators/utils/validator-to-elem-rule';

type ValidateResult = Error | null | undefined;
type Validators<Model extends object = object> = { [field in keyof Model]?: Validator<Model[field]> };
type Errors<Model extends object = object> = { [k in keyof Model]: ValidateResult };
type Dirties<Model extends object = object> = { [k in keyof Model]: boolean };
type Rules<Model extends object = object> = { [k in keyof Model]: { validate: F.Function }};
type Trigger = string;
type FormItemElement = {
  prop?: string;
  [otherKey: string]: unknown;
  form?: Form
  validate?: (trigger: Trigger, callback?: (message: string | null) => unknown) => unknown | Promise<unknown>;
  clearValidate?: () => unknown;
};
type FromItemElementPlus = {
  isPlus: true;
};
export type FormItem = FormItemElement | FromItemElementPlus;
type FromElement = {
  fields: FormItemElement[]
  $on(evtType: 'validate', handler: HandleValidate): unknown;
  $off(evtType: 'validate', handler: HandleValidate): unknown;
};
type FormElementPlus = {
  isPlus: true;
};

type HandleValidate<Model extends object = object> = (prop: keyof Model, _: unknown, message: string) => unknown;
export type Form = FromElement | FormElementPlus;
function isPlus(form: Form): form is FormElementPlus {
  return !form.fields;
}
export function useFormValidation<Model extends object>(
  model: Model,
  formOrFormItems: Ref<FormItem[] | Form>,
  validators: Validators<Model>,
  {
    errHandler = () => {},
    ruleMixin = {},
    onValidate = () => {},
    blurTriggerKeys = [],
  } : {
    errHandler?(e: ValidateError): unknown,
    ruleMixin?: Record<string, unknown>,
    onValidate?: <K extends keyof Model>(
      value: Model[K], oldValue: Model[K],
      detail: { validator?:Validator<Model[K]>,
        error: ValidateResult, prop: K, trigger?: Trigger }) => void,
    blurTriggerKeys?: string[],
  } = {},
): {
    error: Ref<ValidateResult>
    errors: Errors<Model>;
    rules: Rules<Model>;
    dirties: Dirties<Model>;
    dirty: Ref<boolean>;
    validate: () => Promise<void>;
    validateItem(prop: keyof Model, trigger?: Trigger): Promise<void>;
    clearError: (prop: keyof Model) => void;
    clearErrors: () => void;
  } {
  const formItems = computed(() => {
    console.log(formOrFormItems.value, formOrFormItems.value.$slots.default());
    return (Array.isArray(formOrFormItems.value) ? formOrFormItems.value : formOrFormItems.value.fields);
  });
  const form = computed(() => {
    return !Array.isArray(formOrFormItems.value) ? formOrFormItems.value : formOrFormItems.value[0].form;
  });
  const rules = {
    ...Object.fromEntries(
      Object.entries(model)
        .map(([key]) => [key, [{
          validator(_: unknown, __:unknown, callback: F.Function) { callback(); },
          trigger: blurTriggerKeys.includes(key) ? 'blur' : 'change',
        }]]),
    ) as unknown as Rules<Model>,
    ...Object.fromEntries(Object.entries(validators)
      .map(([key, validator]) => [
        key,
        validator2ElemRules(validator as unknown as any, { trigger: blurTriggerKeys.includes(key) ? 'blur' : 'change' }),
      ])) as unknown as Rules<Model>,
  };
  const oldModel = {
    ...model,
  };
  const errors = shallowReactive(
    Object.fromEntries(
      Object.entries(validators).map(([k]) => {
        return [k, undefined];
      }),
    ),
  ) as Errors<Model>;

  const dirties = shallowReactive(
    Object.fromEntries(
      Object.entries(validators).map(([k]) => {
        return [k, false];
      }),
    ),
  ) as { [k in keyof Model]: boolean };

  function handleChange(prop: keyof Model, _: unknown, message: string) {
    dirties[prop] = true;
    const oldValue = oldModel[prop];
    oldModel[prop] = model[prop];
    errors[prop] = message ? new ValidateError(message) : null;
    // console.log('!!!', model[prop], oldValue);
    onValidate(model[prop], oldValue, { validator: validators[prop], error: errors[prop], prop });
  }


  watch(form, (newForm, oldForm) => {
    if (!isPlus(form)) {
      if (oldForm) {
        oldForm.$off('validate', handleChange);
      }
      if (newForm) {
        newForm.$on('validate', handleChange);
      }
    }
    // else {

    // }
  });


  const dirty = computed(() => {
    const _dirties = Object.values(dirties) as boolean[];
    return _dirties.some(item => item);
  });
  const error = computed(() => {
    const _errors = Object.values(errors) as ValidateResult[];
    const __errors = _errors.filter((_error): _error is Error => !!_error);
    if (!__errors.length) {
      return null;
    }
    return new ValidateError(__errors[0]!.message, {
      // @ts-ignore
      errors: __errors,
    });
  });

  function getFormItems(name: keyof Model) {
    return formItems.value.filter((item): item is FormItem => item.prop === name);
  }
  function getFormItem(name: keyof Model) {
    return getFormItems(name)[0];
  }

  const _validateItem = async (instance: FormItem, trigger: Trigger = 'change') => {
    const prop = instance.prop as unknown as keyof Model;
    if (!prop) {
      return;
    }
    errors[prop] = null;
    dirties[prop] = true;
    const oldValue = oldModel[prop];
    oldModel[prop] = model[prop];
    try {
      if (instance && instance.validate) {
        let resolve!: F.Function;
        let reject!: F.Function;
        const p = new Promise((_resolve, _reject) => {
          resolve = _resolve;
          reject = _reject;
        });
        const a = instance.validate(trigger, (errMsg) => {
          if (errMsg) reject(new Error(errMsg));
          resolve();
        });
        if (a instanceof Promise) {
          a.then(resolve, reject);
        }
        await p;
      } else {
        const validator = validators[prop];
        try {
          await validator?.(model[prop]);
        } finally {
          onValidate(model[prop], oldValue, {
            error: errors[prop], prop, trigger, validator,
          });
        }
      }
    } catch (_e) {
      const e = _e as Error;
      const validateError = new ValidateError(e.message, { instance });
      errors[prop] = validateError;
      throw validateError;
    }
  };
  const validateItem = async (name: keyof Model, trigger: Trigger = 'change') => {
    const hasError = errors[name];
    try {
      await _validateItem(getFormItem(name), 'change');
    } catch (e) {
      if (hasError) {
        return;
      }
      errHandler(e as ValidateError);
    }
  };
  const validate = async () => {
    console.log(formItems);
    // const { form } = formItems.value[0];
    let _error: Error | undefined;
    await Promise.all(
      formItems.value.map(item => _validateItem(item).catch(e => {
        _error = _error ?? e;
      })),
    );
    if (_error) {
      throw new AppError(Object.values(errors).filter((e): e is Error => !!e));
    }
  };

  const clearError = (prop: keyof typeof validators) => {
    const items = formItems.value.filter(item => item.prop === prop);
    items.forEach((item) => {
      if (item.clearValidate) {
        item.clearValidate();
      }
    });
    errors[prop] = null;
  };

  const clearErrors = () => {
    Object.keys(errors).forEach(prop => clearError(prop as keyof typeof validators));
  };

  return {
    dirty,
    error,
    errors,
    dirties,
    validate,
    validateItem,
    clearError,
    clearErrors,
    rules,
  };
}

export default useFormValidation;
