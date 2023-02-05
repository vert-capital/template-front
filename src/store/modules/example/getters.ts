import type { IDataState } from './types';

export default {
  getIsLoading(state: IDataState): boolean {
    return state.isLoading;
  },
  getIsRequesting(state: IDataState): boolean {
    return state.isRequesting;
  }
};
