import { createStore, Store } from 'vuex';
import type { InjectionKey } from 'vue';

import UserStore from '@/store/modules/user';

export interface IRootState {
  user: any;
}

export const key: InjectionKey<Store<IRootState>> = Symbol();

const store = createStore<IRootState>({
  modules: {
    user: UserStore
  }
});

export default store;
