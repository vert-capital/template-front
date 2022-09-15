import router from '@/router';
import type { ActionContext } from 'vuex';
import { getUserInfo, validToken, logoutApplication, getApplications } from './services';

export default {
  async login({ commit }) {
    return await validToken(String(localStorage.getItem('token')))
      .then(() => {
        commit('setTokens');
        commit('setIsLogged', true);
        router.push('/');
      })
      .catch((error: any) => {
        throw error;
      });
  },
  async fetchUserInfo({ commit }: ActionContext<any, any>) {
    return await getUserInfo()
      .then((response: any) => {
        commit('setUserInfo', response.data);
      })
      .catch((error: any) => {
        throw error;
      });
  },
  async logout({ commit }: ActionContext<any, any>) {
    return await logoutApplication()
      .then(() => {
        commit('setClearTokens');
      })
      .catch((error: any) => {
        throw error;
      });
  },
  async fetchApplications({ commit }: ActionContext<any, any>) {
    return await getApplications()
      .then((response: any) => {
        commit('setApplications', response.data);
      })
      .catch((error: any) => {
        throw error;
      });
  }
};
