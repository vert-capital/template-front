import { IData } from '../modules/example/types';
import { Time } from '@vert-capital/design-system';

export class ExampleDataModel implements IData {
  id = 0;
  name = '';
  initial_data = '';
  date_time_update = '';

  time = new Time();

  get initial_data_at_date(): Date {
    const date = this.time.getDateFromDateString(this.initial_data);
    return date;
  }

  get initial_data_formatted(): string {
    return this.time.getDateLocaleFromDateString(this.initial_data);
  }

  constructor(data: IData = {} as IData) {
    this.id = data.id || 0;
    this.name = data.name || '';
    this.initial_data = data.initial_data || '';
    this.date_time_update = data.date_time_update || '';
  }
}
