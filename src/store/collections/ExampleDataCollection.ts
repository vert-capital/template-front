import { ExampleDataModel } from '../models/ExampleDataModel';

export class ExampleDataCollection {
  collection: ExampleDataModel[] = [];

  constructor(data: ExampleDataModel[] = []) {
    this.collection = data.map((item: ExampleDataModel) => new ExampleDataModel(item));
  }

  getItemById(id: number): ExampleDataModel | undefined {
    return this.collection.find((item: ExampleDataModel) => item.id === id);
  }

  getItemByName(name: string): ExampleDataModel | undefined {
    return this.collection.find((item: ExampleDataModel) => item.name === name);
  }

  getCollectionOrderedByName(): ExampleDataModel[] {
    return this.collection.sort((a: ExampleDataModel, b: ExampleDataModel) =>
      a.name.localeCompare(b.name)
    );
  }
}
