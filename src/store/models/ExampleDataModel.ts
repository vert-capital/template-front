import { IData } from '../modules/example/types';
import { Time } from '@vert-capital/design-system';

export class ExampleDataModel implements IData {
  id = 0;
  name = '';
  initial_data = '';
  date_time_update = '';

  time = new Time();

  get initial_data_formatted(): string {
    const { date, month, year } = this.time.getAllVariablesFromDatetring(this.initial_data);
    return date + '/' + month + '/' + year;
  }

  constructor(data: IData = {} as IData) {
    this.id = data.id || 0;
    this.name = data.name || '';
    this.initial_data = data.initial_data || '';
    this.date_time_update = data.date_time_update || '';
  }
}
