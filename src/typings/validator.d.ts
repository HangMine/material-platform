export type Validator<V = unknown> = (value: V, options?: Record<PropertyKey, unknown>) => Promise<void> | void;
export default Validator;
