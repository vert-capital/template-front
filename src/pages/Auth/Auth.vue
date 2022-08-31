<template>
  <div></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';
import router from '@/router';
import config from '@/common/config';

export default defineComponent({
  name: 'Auth',
  created() {
    this.setToken();

    if (store.getters['user/isLogged']) {
      router.push('/');
    } else if (localStorage.getItem('token')) {
      store.dispatch('user/login');
    } else {
      window.location.href = String(config.ssoUrl);
    }
  },
  methods: {
    setToken() {
      const token = String(this.$route.params.token);
      const refreshToken = String(this.$route.params.refreshToken);

      if (token && refreshToken) {
        localStorage.setItem('token', token);
        localStorage.setItem('refresh_token', refreshToken);
      }
    }
  }
});
</script>
