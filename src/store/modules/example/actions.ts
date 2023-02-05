import type { ActionContext } from 'vuex';
import { getApiData } from './services';

export default {
  async fetchData({ commit }: ActionContext<any, any>) {
    const response = await getApiData();
    commit('setCollection', response);
  }
};
