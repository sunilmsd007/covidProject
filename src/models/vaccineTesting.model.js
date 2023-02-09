import { Schema, model } from 'mongoose';

const vaccineTestingSchema = new Schema(
  {
    Date: {
      type: Date
    },
    State: {
      type: String
    },
    TotalSamples: {
      type: Number
    },
    Negative: {
      type: Number
    },
    Positive: {
      type: Number
    }
  }
);

export default model('vaccineTesting', vaccineTestingSchema, "statewiseTestingDetails");
