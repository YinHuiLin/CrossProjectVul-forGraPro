import Vue from 'vue'
import VueRouter from 'vue-router';
import { routes } from './router.config'


Vue.use(VueRouter);

export const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes,
});