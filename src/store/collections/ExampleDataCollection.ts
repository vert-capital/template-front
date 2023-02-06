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

  getCollectionOrderByParam(param: string): ExampleDataModel[] {
    if (!param) return this.collection;
    return this.collection.sort((a: ExampleDataModel, b: ExampleDataModel) =>
      a[param].localeCompare(b[param])
    );
  }

  getCollectionOrderedByName(): ExampleDataModel[] {
    return this.collection.sort((a: ExampleDataModel, b: ExampleDataModel) =>
      a.name.localeCompare(b.name)
    );
  }
}
