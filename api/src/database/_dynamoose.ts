import * as dynamoose from "dynamoose";
import { ModelType } from "dynamoose/dist/General";
import { Schema } from "dynamoose/dist/Schema";
import { ModelTableOptions } from "dynamoose/dist/Model";
import { Item } from "dynamoose/dist/Item";

export const createRepository = <
  S extends Item,
  T extends { [name: string]: (...args: any[]) => Promise<any> }
>(
  tableName: string,
  schema: Schema,
  options: Partial<ModelTableOptions>,
  methods: T
) => {
  const repository = dynamoose.model<S>(tableName, schema, options);
  Object.entries(methods).forEach(([name, fn]) => {
    repository.methods.set(name, fn);
  });
  return repository as ModelType<S> & T;
};
