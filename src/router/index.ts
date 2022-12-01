import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';
import config from '@/common/config';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../pages/Base/BasePage.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../pages/Home/Home.vue')
        }
      ]
    },
    {
      path: '/page-example',
      component: () => import('../pages/Base/BasePage.vue'),
      children: [
        {
          path: '',
          name: 'PageExample',
          component: () => import('../pages/PageExample/PageExample.vue')
        }
      ]
    },
    {
      path: '/auth/:token/:refreshToken/',
      name: 'auth',
      component: () => import('../pages/Auth/Auth.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name != 'auth') {
    if (store.getters['user/isLogged']) next();
    else if (String(localStorage.getItem('token')).length > 1) {
      store.dispatch('user/login');
    } else {
      window.location.href = String(config.ssoUrl);
    }
  } else {
    next();
  }
});

export default router;
