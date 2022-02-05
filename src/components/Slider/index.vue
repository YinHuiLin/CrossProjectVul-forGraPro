<template>
  <div class="slide-menu">
    <a-menu
      mode="inline"
      :default-selected-keys="['/main']"
    >
      <template v-for="item in menuList"> 
        <a-menu-item v-if="!item.children" :key="item.path" @click="routeLink(item.path)"> 
          <span>{{ item.name }}</span>
        </a-menu-item>
        <!-- 可以展开的二级菜单 -->
        <a-sub-menu v-else :key="item.router"> 
          <span slot="title"><span>{{ item.name }}</span></span>
          <a-menu-item v-for="menuChildren in item.children" :key="menuChildren.path"  @click="routeLink(menuChildren.path)">
            {{ menuChildren.name }}
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { routes } from '../../router/router.config';

export default {
   data() {
    const menuList = routes[0].children
    return {
      menuList
    };
  },
  methods:{
    routeLink(route){
      if(this.$route.path !== route){
        //获取路由对象并切换
        this.$router.push(route)
    }
    }
  }

}
</script>

<style lang="scss">
.slide-menu {
  width: 220px;
  position: fixed;
  left: 0;
  top: 50px;
  height: 100vh;
}
.slide-menu {
  ul {
    height: 100%;  
  }
  
}  

</style>