import type { IDataState } from './types';
import { ExampleDataModel } from '@/store/models/ExampleDataModel';
import { ExampleDataCollection } from '@/store/collections/ExampleDataCollection';

export default {
  setIsRequesting(state: IDataState, isRequesting: boolean): void {
    state.isRequesting = isRequesting;
  },
  setIsLoading(state: IDataState, isLoading: boolean): void {
    state.isLoading = isLoading;
  },
  setData(state: IDataState, data: IDataState['data']): void {
    state.data = new ExampleDataModel(data);
  },
  setCollection(state: IDataState, collection: IDataState['collection']): void {
    state.collection = new ExampleDataCollection(collection);
  }
};
