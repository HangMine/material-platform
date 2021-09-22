<template>
  <div v-if="html" class="help-center-article">
    <el-container class="content" ref="root">
      <el-main class="main">
        <div class="back" @click="back">
          <i class="i-r-zuo-12"></i>
          {{ $t("help-center.back") }}
        </div>
        <div v-html="html" @click="handleClick" class="article"></div>
        <!-- <div class="research">
          <div class="step-1" v-if="feedback === undefined">
            <h2>
              {{ $t("help-center.article_helpful") }}
            </h2>
            <div>
              <el-button @click="$act(handleFeedback, [0])">
                {{ $t("help-center.is_helpful") }}
              </el-button>
              <el-button @click="$act(handleFeedback, [1])">
                {{ $t("help-center.is_not_helpful") }}
              </el-button>
            </div>
          </div>
          <div class="step-3 flex-center" v-else-if="feedback">
            <div class="iconfont icon-tick-circle"></div>
            <div>
              {{ $t("help-center.thanks_feedback") }}
            </div>
          </div>
          <div class="step-4 flex-center" v-else>
            <img :src="require('@/assets/img/help-center/face.png')" />
            <div>
              {{ $t("help-center.thanks_feedback_2") }}
            </div>
          </div>
        </div>
        <div class="step-2" v-if="feedback">
          <p>
            {{ $t("help-center.feel_free") }}
          </p>
          <el-input
            type="textarea"
            v-model="feedback.content"
            :autosize="{ minRows: 4, maxRows: 8 }"
            :placeholder="$t('help-center.like_what')"
          />
          <div>
            <el-button :disabled="!feedback.content.trim()" @click="$act(handleFeedbackComment, [])">
              {{ $t("help-center.send_feedback") }}
            </el-button>
          </div>
        </div> -->
      </el-main>
      <el-aside class="aside" style="width: 376px">
        <ul v-if="navs.length" class="nav">
          <li v-for="nav in navs" @click="handleNavClick(nav)" :key="nav.id" :class="{ active: `#${nav.id}` === hash }">
            {{ nav.name }}
          </li>
        </ul>
      </el-aside>
    </el-container>
  </div>
  <div v-else v-loading="true" style="height: 200px"></div>
</template>


<script>
import { ref } from 'vue';
import { debounce } from 'throttle-debounce';
import { scrollTo } from '_/scroll';
import { feedback as postFeedback, feedbackComment as postFeedbackComment } from '@/api/help-center';
import loadMarkdown from '@/utils/load-markdown';
import envs from '@/utils/envs';
import i18n from '@/i18n';
import { getContextUser } from '@/loaders/context';
import { history } from '@/utils/history';
import {
  RouteLocation,
} from 'vue-router';
import { computed, reactive } from '@vue/runtime-core';
import { ElContainer } from 'element-plus';
import { helpCenterStore } from '../utils';


function getCatalog(dom, selector = 'h2') {
  const result = [];
  const elems = dom.querySelectorAll(selector);
  for (let i = 0; i < elems.length; i++) {
    const elem = elems[i];
    result.push({ name: elem.innerHTML, id: elem.id });
  }
  return result;
}

function getClickAnchor(el) {
  do {
    if (el.tagName === 'A') {
      return el;
    }
    el = el.parentNode;
  } while (el);
  return undefined;
}

export default {
  props: {
    pathMatch: String,
    hash: String,
  },
  data() {
    return {
      lastModified: undefined,
      html: '',
      navs: [],
      feedback: undefined,
    };
  },
  computed: {
    rootElem() {
      return this.$refs.root.$el ?? this.$refs.root;
    },
    isCloth() {
      const user = getContextUser();
      return user && user.businessType === 2;
    },
  },
  methods: {
    handleNavClick(nav) {
      if (nav.id !== this.hash) {
        this.$router.replace({ hash: `#${nav.id}` });
      }
    },
    async handleFeedbackComment() {
      await postFeedbackComment({
        id: this.feedback.id,
        content: this.feedback.content,
      });
      this.feedback = null;
    },
    async handleFeedback(helpful) {
      const relateId = this.pathMatch.replace(/^\.\//, '');
      const fb = {
        relateId,
        helpful,
        content: '',
        type: 1,
        version: this.lastModified,
      };
      fb.id = (await postFeedback(fb)).data;
      this.feedback = fb;
    },
    handleClick(e) {
      const a = getClickAnchor(e.target);
      if (e.target.tagName === 'IMG') {
        // const images = Array.from(this.rootElem.querySelectorAll('img'));
        // this.$ImageViewer.show(images.map(image => image.src), {
        //   index: images.findIndex(img => img === e.target),
        //   targetElems: images,
        // });
      }
      if (a) {
        e.preventDefault();
        this.$router.push(a.pathname);
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.$watch(() => [this.hash, this.html], debounce(100, async ([hash]) => {
      await this.$nextTick();
      const id = hash.replace(/^#/, '');
      const el = document.querySelector(`[id="${id}"]`);
      if (el) {
        if (!this.isUnNavScroll) {
          this.isUnNavScroll = true;
          return;
        }
        const top = el.offsetTop - this.rootElem.offsetTop;
        scrollTo({ top, behavior: 'smooth' });
      }
    }), {
      immediate: true,
    });
  },
  watch: {
    pathMatch: {
      async handler(v) {
        this.isUnNavScroll = false; // 每次路由变化时,重设该标识
        // this.html = undefined;
        // this.navs = undefined;
        let resp;
        try {
          helpCenterStore.loading = true;
          resp = await loadMarkdown(`${envs.VUE_APP_HELP_CENTER_URL}/${i18n.lang}/${v}.md`, '', '..');
        } catch (e) {
          if (e.response.status === 404) {
            this.$router.replace('/help-center');
          }
        } finally {
          helpCenterStore.loading = false;
        }
        // const { data: dom, lastModified } = await loadMarkdown(`${v}.md`, v);
        const { data: dom, lastModified } = resp;
        this.lastModified = lastModified;
        this.html = dom.innerHTML || '';
        this.navs = getCatalog(dom) || [];
        if (this.navs.length) this.handleNavClick(this.navs[0]); // 没有导航栏
      },
      immediate: true,
    },
  },
};

</script>

<style lang="scss" scoped>
.help-center-article {
  width: 1200px;
  margin: 0 auto 20px;
  .content {
    margin: 24px 60px;
    background: white;

    .research {
      height: 140px;
      border-top: 1px #d3d4d4 solid;
      border-bottom: 1px #d3d4d4 solid;
      margin-top: 60px;
      padding: 30px 0;
      .step-1 {
        text-align: center;
        h2 {
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 16px;
        }
        .el-button {
          margin-right: 16px;
          &:hover {
            background-color: #2878ff;
            color: #fff;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .step-3 {
        height: 100%;
        text-align: center;
        .icon-tick-circle {
          font-size: 44px;
          color: $color-primary;
        }
      }
      .step-4 {
        height: 100%;
        text-align: center;
        img {
          height: 44px;
          width: 44px;
          margin-right: 12px;
        }
      }
    }
    .step-2 {
      p {
        text-align: left;
        line-height: 55px;
      }
      text-align: right;
      .el-textarea {
        margin-bottom: 16px;
      }
    }
    .main {
      padding-left: 61px;
      padding-top: 41px;
      padding-bottom: 41px;
      padding-right: 0;
      position: relative;
      .back {
        top: 20px;
        left: 30px;
        position: absolute;
        cursor: pointer;
        display: inline-block;
      }
    }
    .aside {
      color: #999999;
      padding: 67px 61px;
      overflow: initial;
      .nav {
        position: sticky;
        top: 130px;
      }
      li {
        cursor: pointer;
        line-height: 24px;
        padding: 8px 20px;
        margin: {
          top: 8px;
          bottom: 8px;
        }
        display: block;
        border-radius: 4px;
        &.active {
          cursor: text;
          background-color: #2878ff;
          color: white;
        }
      }
    }
    .article {
      color: #606266;
    }
    .article /deep/ {
      [id] {
        position: relative;
      }
      [id]::before {
        content: "";
        display: block;
        height: 100px;
        position: absolute;
        top: -100px;
        visibility: hidden;
      }
      img[height="30"],
      img[height="20"] {
        vertical-align: middle;
      }
      img {
        cursor: pointer;
        max-width: 100%;
      }
      a[href] {
        color: $color-primary;
      }
      ul,
      ol {
        padding-left: 3em;
      }
      ul {
        list-style-type: disc;
      }
      ol {
        list-style-type: decimal;
      }
      li {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
      }
      p {
        margin-bottom: #{(16/14)}em;
        line-height: 20px;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: #333;
      }
      h1 {
        font-size: 30px;
        margin-bottom: #{(8/30)}em;
        margin-top: #{(16/30)}em;
        line-height: 1.4;
      }
      h2 {
        font-size: 16px;
        line-height: (24/16);
        padding-top: #{(12/16)}em;
        padding-bottom: #{(12/16)}em;
        border-bottom: 1px #d3d4d4 solid;
        margin-bottom: #{(15/16)}em;
      }
    }
  }
}
</style>
