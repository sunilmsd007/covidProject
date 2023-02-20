import { Schema, model } from "mongoose";

const covid19schema = new Schema(
    {
        Sno: {
            type: Number
        },
        Date: {
            type: Date
        },
        Time: {
            type: String
        },
        "State/UnionTerritory": {
            type: String
        },
        ConfirmedIndianNational: {
            type: Number
        },
        ConfirmedForeignNational: {
            type: Number
        },
        Cured: {
            type: Number
        },
        Deaths: {
            type: Number
        },
        Confirmed: {
            type: Number
        }
    }
);

export default model('Covid19India', covid19schema, 'covid19India');