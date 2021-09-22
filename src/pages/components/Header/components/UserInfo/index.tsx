import { getPx } from '@/components/sd-table/utils';
import { getContextUser } from '@/loaders/context';
import classNames from 'classnames';
import { computed, defineComponent, PropType } from 'vue';
import './index.scss';

export default defineComponent({
  name: 'User',
  components: {},
  props: {
    userContext: {
      type: Object as PropType<{headImg?: String, name?: String, account?: String}>,
    },
    noTitle: {
      type: Boolean,
      default: false,
    },
    size: {
      type: [Number, String],
      default: 40,
    },
    descText: {
      type: String,
      default: '',
    },
  },
  setup(props, { attrs, slots }) {
    const user = computed(() => props.userContext ?? getContextUser());
    const userImage = computed(() => user.value?.headImg || require('@/assets/img/header/default_avatar.png'));
    const userTitle = computed(() => user.value?.name || user.value?.account || '');
    const userImgStyle = computed(() => {
      const width = getPx(props.size);
      return {
        width,
        height: width,
      };
    });

    return () => (
      <div class={classNames('user-info flex-vertical-center', props.noTitle ? 'no-title' : '')}>
        <div class="user-img" style={userImgStyle.value}>
          <base-image src={userImage.value} {...attrs}></base-image>
        </div>
        <div>
          {props.noTitle ? null : <h4 class='title'>{userTitle.value}</h4>}
          {slots.desc?.() || (props.descText && <small class="desc" >{ props.descText }</small>) }
        </div>
      </div>
    );
  },
});
