import './App.css';
import { useState } from 'react';

const App = () => {
  // Question 1 -Find the missing number in a given integer array of 1 to 100
  const [anArray, setanArray] = useState([1, 2, 3, 4, 5, 6, 7, 9, 9]);

  const findMissingNumber = anArray => {
    for (let i = 0; i < anArray.length - 1; i++) {
      if (anArray[i] + 1 !== anArray[i + 1]) {
        return anArray[i] + 1;
      }
    }
    return false;
  }

  console.log(findMissingNumber(anArray), `findMissingNumber(anArray)`)



  // Question 2. Find a duplicate number in an array of integers

  const [dupes, setDupes] = useState([1, 2, 3, 4, 5, 5, 6, 7, 8]);

  const findDupes = dupes => {
    let anObject = {};
    for (let i = 0; i < dupes.length; i++) {
      if (anObject[dupes[i]]) {
        return dupes[i]
      } else {
        anObject[dupes[i]] = dupes[i]
      }
    }
    return false;
  }

  console.log(findDupes(dupes), `fundDupes(dupes)`)
  // Question 3. Find the largest and smallest number in an unsorted array of integers

  const [minMax, setMinMax] = useState([1, 2, 3, 4, 5, 600]);

  const findMaxMin = (minMax) => {
    let min = minMax[0];
    let max = minMax[0]

    for (let i = 0; i < minMax.length; i++) {
      if (anArray[i] > max) {
        max = minMax[i]
      } else if (anArray[i] < min) {
        min = minMax[0]
      }
    }
    return {
      'min': min,
      'max': max,
    }
  }
  console.log(findMaxMin(minMax), `findMaxMin(minMax)`)
  // Question 4. Return an array showing the cumulative sum at each index of an array of integers

  const [cumulative, setCumulative] = useState([1, 3, 5, 7]);

  const cumulativeSum = list => {
    let result = [list[0]];
    for (let i = 1; i < list.length; i++) {
      result.push(list[i] + result[i - 1]);
    }
    return result
  }

  console.log(cumulativeSum(cumulative), `cumulativeSum(cumulative)`)
  // Question 5. Find all duplicate numbers in an array with multiple duplicates

  const [multiDupes, setMultiDupes] = useState([1, 1, 2, 3, 4, 5, 6, 7, 8, 6, 6, 7, 7, 7, 10, 10]);

  const returnMultipleDupes = multiDupes => {
    let anObject = {};
    let anArray = [];

    for (let i = 0; i < multiDupes.length; i++) {
      if (anObject[multiDupes[i]]) {
        if (anObject[multiDupes[i]] === 1) {
          anArray.push(multiDupes[i]);
        }
        anObject[multiDupes[i]] = anObject[multiDupes[i]] + 1;
      } else {
        anObject[multiDupes[i]] = 1;
      }
    }
    return anArray;
  }

  console.log(returnMultipleDupes(multiDupes), `returnMultipleDupesanArrayay(multiDupes)`)

  // Questing 6. Remove all duplicates from an array of integers


  const [removeDupesIndex, setRemoveDupesIndex] = useState([1, 1, 1, 1, 1, 1, 1]);

  const removeDupes = removeDupesIndex => {
    let result = [];
    let previous = removeDupesIndex[0];
    result[0] = previous;
    for (let i = 0; i < removeDupesIndex.length; i++) {
      if (removeDupesIndex !== previous) {
        result.push(removeDupesIndex[i])
      }
      previous = removeDupesIndex[i];
    }
    return result;
  }

  console.log(removeDupes(removeDupesIndex), `removeDupes(removeDupesIndex)`)

  // Question 7. Find all pairs in an array of integers whose sum is equal to a given number

  const [sumParis, setSumParis] = useState([1, 5, 6, 1, 0, 1]);

  const findSumParis = (sumParis, value) => {
    let sumLookUp = {};
    let output = [];
    for (let i = 0; i < sumParis.length; i++) {
      let targetVal = value - sumParis[i];
      if (sumLookUp[targetVal]) {
        output.push([sumParis[i], targetVal])
      }
      sumLookUp[sumParis[i]] = true;
    }
    return output;
  }

  console.log(findSumParis(sumParis, 6), `findSumParis(sumParis)`)

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Algorithm Interview Questions and Answers (JS)
        </h3>
      </header>
    </div>
  )
}

export default App;


let arr = [1, 2, 3, 4, 5, 6, 7, 4, 8, 9, 1000];

const findMissingNumberس = arr => {
  if (arr[0] === 1 & arr[arr.length - 1] === 100) {
    console.log(`do not need itrate for Loop and Return the missing number`)
    return arr;
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i] + 1;
      }
    }
  }
  return false;
}



const findDupesz = arr => {
  let observer = {};
  for (let i = 0; i < arr.length; i++) {
    if (observer[arr[i]]) {
      //  console.log(observer[arr[i]], `observer[arr[i]]`)
      return arr[i];
    } else {
      //   console.log(arr[i], `arr[i]`)
      observer[arr[i]] = arr[i];
    }
  }
  console.log(`no Dupes Number Found`);
  return false;

}

console.log(findDupesz(arr), `findDupesz(arr)`)

console.log(findMissingNumberس(arr), `findMissingNumber(arr)`)


const FindMinandMax = arr => {
  let min = arr[0];
  let max = arr[0];
  // using itrate loop to get [min && max]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i]
    }
  }
  return {
    'min': min,
    'max': max,
  }
}

console.log(FindMinandMax(arr), `FindMinandMax`);

let Ax = [1, 2, 3, 4];


const CumlativeSum = list => {
  let result = [list[0]]
  for (let i = 1; i < list.length; i++) {
    result.push(list[i] + result[i - 1])
  }
  return result;
}

console.log(CumlativeSum(Ax), `CumlativeSum(Ax)`);


const Axx = [1, 1, 2, 3, 4, 5, 6, 7, 8, 6, 6, 7, 7, 7, 10, 10];



const returnMultipleDupesArrayz = Axx => {
  let anObject = {};
  let anArray = [];
  for (let i = 0; i < Axx.length; i++) {
    if (anObject[Axx[i]]) {
      if (anObject[Axx[i]] === 1) {
        anArray.push(Axx[i])
      }
      anObject[Axx[i]] = anObject[Axx[i]] + 1;
    } else {
      anObject[Axx[i]] = 1;
    }
  }
  return anArray;
}

console.log(returnMultipleDupesArrayz(Axx), `returnMultipleDupesArrayz(Axx)`)



let remove = [1, 1, 1, 1, 1, 1];


const removeDupes = remove => {
  let result = [];

  let prev = remove[0];

  result[0] = prev;

  for (let i = 0; i < remove.length; i++) {
    if (remove[i] !== prev) {
      result.push(remove[i]);
    } 
    else {
      prev = remove[i]
    }
  }
  return result;
}

console.log(removeDupes(remove), `removeDupes(remove)`)