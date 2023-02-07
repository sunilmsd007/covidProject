import { Schema, model } from 'mongoose';

const vaccineSchema = new Schema(
  {
    "Updated On": {
      type: Date
    },
    State: {
      type: String
    },
    "Total Doses Administered": {
      type: Number
    },
    Sessions: {
      type: Number
    },
    Sites: {
      type: Number
    },
    "First Dose Administered": {
      type: Number
    },
    "Second Dose Administered": {
      type: Number
    },
    "Male (Doses Administered)": {
      type: Number
    },
    "Female (Doses Administered)": {
      type: Number
    },
    "Transgender (Doses Administered)": {
      type: Number
    },
    "Covaxin (Doses Administered)": {
      type: Number
    },
    "CoviShield (Doses Administered)": {
      type: Number
    },
    "Sputnik V (Doses Administered)": {
      type: Number
    },
    AEFI: {
      type: Number
    },
    "18-44 Years (Doses Administered)": {
      type: Number
    },
    "45-60 Years (Doses Administered)": {
      type: Number
    },
    "60+ Years (Doses Administered)": {
      type: Number
    },
    "18-44 Years(Individuals Vaccinated)": {
      type: Number
    },
    "45-60 Years(Individuals Vaccinated)": {
      type: Number
    },
    "60+ Years(Individuals Vaccinated)": {
      type: Number
    },
    "Male(Individuals Vaccinated)": {
      type: Number
    },
    "Female(Individuals Vaccinated)": {
      type: Number
    },
    "Transgender(Individuals Vaccinated)": {
      type: Number
    },
    "Total Individuals Vaccinated": {
      type: Number
    },
  },
);

export default model('Vaccination', vaccineSchema, "statewiseVaccination");
