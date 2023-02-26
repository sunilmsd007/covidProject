import { Schema, model } from "mongoose";

const studentschema = new Schema(
    {
        name: {
            type: String
        },
        subject: {
            type: String
        },
        marks: [{
            type: Number
        }]
    }
);

export default model('mapReduce', studentschema, 'mapreduce');