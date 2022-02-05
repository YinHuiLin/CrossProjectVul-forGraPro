<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@import './style/global.scss';
#app {
  height: 100%;
  background: #f7f8fa;
}
</style>
