# Task

Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N equally sized
arrays.

Where the size of the original array cannot be divided equally by N, the final part should have a length equal to the
remainder.

```
Example pseudo-code:
groupArrayElements([1, 2, 3, 4, 5], 3);
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
```

# Solution

## Usage

```
import { groupArrayElements } from "./groupArrayElements.mjs";

const inputArray = [1, 2, 3, 4, 5];
const numberOfGroups = 3;

try {
  const groupedArray = groupArrayElements(inputArray, numberOfGroups);

  console.log(groupedArray) // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
}
catch(e){
  console.log(`Ooops, something broke. Error: ${e}`);
 }
```

## Parameters

Array: Empty or any length

Number of Groups (N): non zero integer

## Returns

Array of N arrays of equal size.
Final array may have fewer elements - it is not padded.
Throws on invalid input.
