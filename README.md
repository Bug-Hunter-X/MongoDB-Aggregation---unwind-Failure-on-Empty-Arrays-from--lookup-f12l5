# MongoDB Aggregation $unwind Issue with Empty Arrays from $lookup

This repository demonstrates a subtle bug in MongoDB aggregation pipelines involving the `$unwind` operator after a `$lookup` that might return empty arrays.  The error message isn't always clear about the cause, making it challenging to debug.

## Problem

The provided `bug.js` file contains a MongoDB aggregation pipeline that uses `$lookup` to join two collections.  When the `foreignKey` field in `collectionB` doesn't exist for a given document in `collectionA`, the pipeline errors unexpectedly. The error message may not clearly indicate the empty array as the cause, especially when dealing with large datasets.

## Solution

The `bugSolution.js` provides a solution that utilizes an `$ifNull` operator within the pipeline to handle cases where the `results` array is empty before unwinding.  This prevents the `$unwind` operation from failing.

This approach robustly handles scenarios with potential empty arrays, making the pipeline more resilient and easier to maintain.