import { ExampleDataModel } from '@/store/models/ExampleDataModel';
import { ExampleDataCollection } from '@/store/collections/ExampleDataCollection';

export interface IDataState {
  isRequesting: boolean;
  isLoading: boolean;
  data: ExampleDataModel;
  collection: ExampleDataModel[];
}

export interface IData {
  id: number;
  name: string;
  initial_data: string;
  date_time_update: string;
}
