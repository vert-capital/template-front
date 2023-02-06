import type { IDataState } from './types';

export default {
  getIsLoading(state: IDataState): boolean {
    return state.isLoading;
  },
  getIsRequesting(state: IDataState): boolean {
    return state.isRequesting;
  },
  getData(state: IDataState): IDataState['data'] {
    return state.data;
  },
  getCollection(state: IDataState): IDataState['collection'] {
    return state.collection;
  }
};
