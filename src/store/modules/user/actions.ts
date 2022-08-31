import router from '@/router';
import type { ActionContext } from 'vuex';
import {  validToken, logoutApplication } from './services';

export default {
  //CHANGE: insert a valid action for autentication
  async login({ commit }: ActionContext<any, any>) {
    // return await validToken(String(localStorage.getItem('token')))
    //   .then(() => {
    //     commit('setTokens');
    //     commit('setIsLogged', true);
    //     router.push('/');
    //   })
    //   .catch((error: any) => {
    //     throw error;
    //   });
    commit('setTokens');
    commit('setIsLogged', true);
    router.push('/');
  },
  async logout({ commit }: ActionContext<any, any>) {
    return await logoutApplication()
      .then(() => {
        commit('setClearTokens');
      })
      .catch((error: any) => {
        throw error;
      });
  }
};
