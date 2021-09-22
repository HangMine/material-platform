<template>
  <router-view name="header"></router-view>
  <router-view />
</template>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-width: 1276px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f2f3f5;
  box-sizing: content-box;
}
</style>
