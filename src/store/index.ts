import { createStore, Store } from 'vuex';
import type { InjectionKey } from 'vue';

import UserStore from '@/store/modules/user';
import ExampleStore from '@/store/modules/example';

export interface IRootState {
  user: any;
  example: any;
}

export const key: InjectionKey<Store<IRootState>> = Symbol();

const store = createStore<IRootState>({
  modules: {
    user: UserStore,
    example: ExampleStore
  }
});

export default store;
