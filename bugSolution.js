```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "results"
    }
  },
  {
    $addFields: {
      results: { $ifNull: [ "$results", [] ] } // Handle null or undefined
    }
  },
  {
    $unwind: "$results" 
  }
];

db.collectionA.aggregate(pipeline);
```