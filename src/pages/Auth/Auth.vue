<template>
  <div class="auth">
    <v-loading v-if="!isInvalidToken" />
    <label v-else>
      Seu login não é válido, para voltar para página de login click
      <a :href="urlLogin"><strong>AQUI</strong></a>
    </label>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import store from '@/store';
import { useRoute, useRouter } from 'vue-router';
import { VLoading } from '@vert-capital/design-system';

const isInvalidToken = computed(() => store.getters['user/isInvalidToken']);
const urlLogin = import.meta.env.VITE_URL_LOGIN_SSO;

const route = useRoute();
const router = useRouter();

const setToken = async () => {
  const token = String(route.params.token);
  const refreshToken = String(route.params.refreshToken);
  if (token && refreshToken && !store.getters['user/isInvalidToken']) {
    localStorage.setItem('token', token);
    localStorage.setItem('refresh_token', refreshToken);
    if (!store.getters['user/isLogged'] && !store.getters['user/isInvalidToken']) {
      await store.dispatch('user/login');
    }
  }
};

onMounted(() => {
  if (store.getters['user/isLogged']) {
    router.push('/');
  } else {
    setToken();
  }
});
</script>
<style lang="scss" scoped>
.auth {
  min-height: 400px;
  margin-top: 10%;
  height: 100%;
}
</style>