<template>
  <div class="basic">
    <Header></Header>
    <Slider></Slider>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '../Header'
import Slider from '../Slider'

export default {
  components: {
    Header,
    Slider
  }

}
</script>

<style lang="scss">
.basic {
  .main-content{
    width: calc(100% - 240px);
    margin-top: 60px;
    margin-left: 230px;
    min-height: 200px;
    background: #ffffff;
    box-sizing: border-box;
    overflow: auto;
  }
}
</style>