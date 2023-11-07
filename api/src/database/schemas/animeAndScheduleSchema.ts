import * as dynamoose from "dynamoose";
import { Item } from "dynamoose/dist/Item";
// import { createRepository } from "./_dynamoose";

export const AnimeAndScheduleSchema = new dynamoose.Schema({
  PK: {
    type: String,
    hashKey: true,
  },
  SK: {
    type: String,
    rangeKey: true,
  },
  exampleId: String,
  exampleName: String,
});

interface AnimeAndSchedule extends Item {
  PK: string;
  SK: string;
  exampleId: string;
  exampleName: string;
}

const AnimeAndScheduleModel = dynamoose.model<AnimeAndSchedule>(
  "AnimeAndSchedule",
  AnimeAndScheduleSchema
);
export type AnimeAndScheduleDocument = typeof AnimeAndScheduleModel;

// [TODO]
// const AnimeAndScheduleRepository = createRepository<
//   AnimeAndScheduleDocument,
//   {
//     calcPK: (obj: { gender: number }) => Promise<number>;
//     calcSK: (obj: { age: number }) => Promise<number>;
//   }
// >(
//   "t_user",
//   voteResultSchema,
//   {
//     create: false,
//     update: false,
//     waitForActive: false,
//   },
//   {
//     calcPK: async (obj) => obj.gender,
//     calcSK: async (obj) => obj.age,
//   }
// );
