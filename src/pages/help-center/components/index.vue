<template>
  <div class="help-center" v-loading="loading">
    <sd-breadcrumb
      :data="[
        {
          path: '/help-center',
          title: '帮助中心',
        },
      ]"
    ></sd-breadcrumb>
    <div class="content">
      <Empty v-if="!sessions.length"></Empty>
      <template v-else>
        <CustomCollapse v-for="(session, i1) in sessions" :key="i1" :title="session.name">
          <ul class="articleList">
            <li v-for="(article, i2) in session.children" :key="i2">
              <router-link :to="`${articlePathBase}${article.url}`" v-html="article.name"> </router-link>
            </li>
          </ul>
        </CustomCollapse>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import i18n from '@/i18n';
import envs from '@/utils/envs';
import loadMarkdown from '@/utils/load-markdown';
import onCreated from '@/utils/vue/onCreated';
import {
  defineComponent, reactive, computed, ref, toRefs,
} from 'vue';
import Empty from '@/components/error/Empty.vue';
import { useRoute } from 'vue-router';
import { helpCenterStore } from '../utils';
import CustomCollapse from './Collapse.vue';

type SessionItem = {
  url?: string | null,
  name?: string
};

type Sessions = {
  name: string,
  children: SessionItem[],
}[];

export default defineComponent({
  name: 'help-center',
  components: { Empty, CustomCollapse },
  props: {},
  setup(props, { emit }) {
    const route = useRoute();
    const state = reactive({
      sessions: [] as Sessions,
      loading: false,
      articlePathBase: computed(() => {
        const endsWithSlash = route.path.endsWith('/');
        return `/help-center/article${endsWithSlash ? '' : '/'}`;
      }),
    });

    function getFirstText(el: HTMLElement) {
      for (let i = 0; i < el.childNodes.length; i++) {
        const node = el.childNodes[i];
        if (node.nodeName === '#text') {
          return node.nodeValue;
        }
      }
      return undefined;
    }

    function scopeQuerySelector(el: HTMLElement, selector: string) {
      const elems = el.querySelectorAll(selector);
      for (let i = 0; i < elems.length; i++) {
        const elem = elems[i];
        if (elem.parentNode === el) {
          return elem;
        }
      }
      return undefined;
    }

    function parseUlToList(ul: HTMLUListElement) {
      const result = [];
      for (let i = 0; i < ul.children.length; i++) {
        const child = ul.children[i];
        const a = scopeQuerySelector(child, 'a');
        const node = a
          ? {
            name: a.innerHTML || '',
            url: a.getAttribute('href').replace(/\.md$/, ''),
          } : {
            name: getFirstText(child) || '',
            url: undefined,
          };
        const childUl = child.querySelector('ul');
        if (childUl) {
          node.children = parseUlToList(childUl) || [];
        }
        result.push(node);
      }
      return result;
    }

    onCreated(async () => {
      try {
        helpCenterStore.loading = true;
        const md = await loadMarkdown(`${envs.VUE_APP_HELP_CENTER_URL}/${i18n.lang}/README.md`, '');
        const { data: dom } = md;
        state.sessions = parseUlToList(dom.querySelector('ul')) || [];
      } finally {
        helpCenterStore.loading = false;
      }
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" scoped>
// @import 'url'
.help-center {
  width: 1200px;
  margin: 0 auto 20px;
  .content {
    padding: 24px 60px;
    background: white;
    .articleList {
      line-height: 22px;
      li {
        font-size: 16px;
        &:before {
          content: "";
          display: inline-block;
          position: relative;
          margin-right: 5px;
          top: 3px;
          width: 4px;
          height: 16px;
          background-color: #2878ff;
        }
        margin-top: 10px;
        line-height: 24px;
        margin-bottom: 10px;
        .help-center-link {
          display: inline-block;
          cursor: pointer;
        }
      }
    }
    .help-center {
      padding: 24px 60px;
    }
  }
}
</style>
