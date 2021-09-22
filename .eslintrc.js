module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    require.resolve('@4dst-saas/rules-preset/vue3-with-ts-recommended.js'),
  ],
  globals: {
    globalThis: false,
    NodeJS: "readonly",
    GetArrayItem: "readonly",
    AsyncReturnType: "readonly",
    Obj: "readonly",
    TableParams: "readonly",
    TableData: "readonly",
    valueof: "readonly",
  },
  rules: {
    // "eslint-disable": "off",
    // 历史原因没有使用snake，改成warn
    'vue/custom-event-name-casing': 'warn',
    // https://github.com/vuejs/eslint-plugin-vue/issues/1314
    // 鉴于上述原因，暂时改成warn
    '@typescript-eslint/ban-ts-comment': 'off',
    // 从vue2迁移过来,时间问题,先屏蔽
    '@typescript-eslint/ban-types': 'off',
    // https://github.com/eslint/eslint/issues/13956
    "indent": "off",
    '@typescript-eslint/indent': ['error', 2],
    "import/no-named-as-default-member": "off",
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
};
