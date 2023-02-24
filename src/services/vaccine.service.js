import Vaccination from '../models/vaccine.model';
import vaccineTesting from '../models/vaccineTesting.model';
//get all vaccination data
export const getAllData = async () => {
  const data = await Vaccination.find();
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//total doses administered per month
export const dosesPerMonth = async () => {
  const data = await Vaccination.aggregate([
    { $group: { _id: { Month: { $month: "$Updated On" } }, total: { $sum: "$Total Doses Administered" } } },
    { $sort: { "_id.Month": 1 } }
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//total doses in specific state
export const dosesInState = async () => {
  const data = await Vaccination.aggregate([
    { $match: { State: "Karnataka" } },
    { $group: { _id: "$State", totalDosage: { $sum: "$Total Doses Administered" } } }
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//total doses in specific state for all gender
export const dosesForGender = async () => {
  const data = await Vaccination.aggregate([
    { $match: { State: "Assam" } },
    { $group: { _id: "$State", male: { $sum: "$Male (Doses Administered)" }, female: { $sum: "$Female (Doses Administered)" }, trans: { $sum: "$Transgender (Doses Administered)" } } }
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//total dosage of individual vaccines in particular state
export const individualVaccinesInState = async () => {
  const data = await Vaccination.aggregate([
    { $match: { State: "Assam" } },
    { $group: { _id: "$State", covaxin: { $sum: "$Covaxin (Doses Administered)" }, CoviShield: { $sum: "$CoviShield (Doses Administered)" }, Sputnik: { $sum: "$Sputnik V (Doses Administered)" } } },
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//sorting total dosage administered within given date range for all states
export const dosageWithinDateRange = async () => {
  const data = await Vaccination.aggregate([
    { $match: { "Updated On": { $gte: new Date("2021-01-17"), $lt: new Date("2021-01-20") } } },
    { $group: { _id: "$State", totalDosage: { $sum: "$Total Doses Administered" } } },
    { $sort: { totalDosage: 1 } }
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//total dosage within given date range of particular state
export const dosageWithinDateRangeForState = async () => {
  const data = await Vaccination.aggregate([
    { $match: { $and: [{ State: "Andhra Pradesh" }, { "Updated On": { $gte: new Date("2021-01-17"), $lt: new Date("2021-01-20") } }] } },
    { $group: { _id: "$State", totalDosage: { $sum: "$Total Doses Administered" } } }
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get first and second dose administered along with sites in all states in sorted manner
export const firstAndSecondDose = async () => {
  const data = await Vaccination.aggregate([
    { $sort: { State: 1 } },
    { $project: { State: 1, Sites: 1, "First Dose Administered": 1, "Second Dose Administered": 1 } }
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//get documents within a given range(ie 5-10)
export const documentsInRange = async () => {
  const data = await Vaccination.aggregate([
    { $limit: 10 },
    { $project: { "Updated On": 1, State: 1, "Total Doses Administered": 1 } },
    { $skip: 5 }
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//pipeline optimization ( the two $skip stages can coalesce into a single $skip where the skip numbers is the sum of the two initial skip numbers)
export const skipOptimization = async () => {
  const data = await Vaccination.aggregate([
    { $sort: { State: 1 } },
    { $skip: 5000 },
    { $project: { "Updated On": 1, State: 1, Sites: 1, "First Dose Administered": 1, "Second Dose Administered": 1 } },
    { $skip: 2840 }
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//pipeline optimization (the two $limit stages can coalesce into a single $limit where the limit number is the smaller of the two initial limit numbers)
export const limitOptimization = async () => {
  const data = await Vaccination.aggregate([
    { $sort: { State: 1 } },
    { $limit: 50 },
    { $project: { "Updated On": 1, State: 1, Sites: 1, "First Dose Administered": 1, "Second Dose Administered": 1 } },
    { $limit: 5 }
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//pipeline optimization ( the two $match stages can coalesce into a single $match combining the conditions with an $and)
export const matchOptimization = async () => {
  const data = await Vaccination.aggregate([
    { $match: { State: "Assam" } },
    { $project: { "Updated On": 1, State: 1, Sites: 1, "First Dose Administered": 1, "Second Dose Administered": 1 } },
    { $match: { "Updated On": new Date("2021-02-01") } }
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//$addFields (Adds new fields to documents. $addFields outputs documents that contain all existing fields from the input documents and newly added fields.)
//note: $addFields overwrites the field if the new field name already exists in the document, including _id.
export const addFields = async () => {
  const data = await Vaccination.aggregate([
    {
      $addFields: {
        "Male+Female": { $add: ["$Male (Doses Administered)", "$Female (Doses Administered)"] }
      }
    },
    { $project: { State: 1, Sites: 1, "Male+Female": 1, "Total Doses Administered": 1 } },
    {
      $match: {
        State: "Assam",
        Sites: { $gt: 20, $lt: 100 }
      }
    },
    { $sort: { Sites: 1 } }
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//$lookup (Performs a left outer join to collections in same database and adds a new array field to each input document.The new array field contains the matching documents from the "joined" collection. )
export const lookup = async () => {
  const data = await Vaccination.aggregate([
    {
      $lookup:
      {
        from: "statewiseTestingDetails",
        localField: "State",
        foreignField: "State",
        as: "state_docs"
      }
    },
    { $match: { State: "Assam" } }
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//$unwind(Deconstructs an array field from the input documents to output a document for each element.)
export const unwind = async () => {
  const data = await Vaccination.aggregate([
    {
      $lookup:
      {
        from: "statewiseTestingDetails",
        localField: "State",
        foreignField: "State",
        as: "state_docs"
      }
    },
    { $match: { State: "Goa" } },
    { $unwind: { path: "$state_docs", preserveNullAndEmptyArrays: false } }
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//$redact (Restricts the contents of the documents based on information stored in the documents themselves)
/**
 * $DESCEND: returns the fields at the current document level, excluding embedded documents.
 * $$PRUNE: excludes all fields at this current document/embedded document level.
 * $$KEEP: returns or keeps all fields at this current document/embedded document level.
 */
export const redact = async () => {
  const data = await Vaccination.aggregate([
    {
      $lookup:
      {
        from: "statewiseTestingDetails",
        localField: "State",
        foreignField: "State",
        as: "state_docs"
      }
    },
    { $match: { State: "Goa" } },
    {
      $redact: {
        $cond: {
          if: { $eq: ["$Updated On", new Date("2021-02-01")] },
          then: "$$DESCEND",
          else: "$$PRUNE"
        }
      }
    }
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//$unionWith (Performs a union of two collections, combines pipeline results from two collections into a single result set.)
export const unionWith = async () => {
  const data = await Vaccination.aggregate([
    { $project: { State: 1, "Updated On": 1 } },
    { $unionWith: { coll: "statewiseTestingDetails", pipeline: [{ $project: { TotalSamples: 1 } }] } },
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//$unset (Removes/excludes fields from documents.)
export const unset = async () => {
  const data = await Vaccination.aggregate([
    { $unset: ["AEFI", "Updated On"] }
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//$sortByCount (computes the count of documents in each distinct group)
export const sortByCount = async () => {
  const data = await Vaccination.aggregate([
    { $sortByCount: "$State" }
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

//$out (Takes the documents returned by the aggregation pipeline and writes them to a specified collection)
export const out = async () => {
  const data = await Vaccination.aggregate([
    { $group: { _id: "$State", totalDosage: { $sum: "$Total Doses Administered" } } },
    { $sort: { _id: 1 } },
    { $out: { db: "covidVaccination", coll: "totalDosageInStates" } }
  ]);
  if (data.length != 0) {
    return data;
  } else {
    throw new Error('No data available');
  }
};

