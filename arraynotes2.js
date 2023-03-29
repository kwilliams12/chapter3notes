// 1 function printFirst(arr){ console.log(arr[0]) } printFirst([3,12,7,14]); printFirst(['a', 'b', 'c']) //2 function printLast(arr){ let lastIndex = arr.length-1 console.log(arr[lastIndex]); } printLast([3,12,7,14]); printLast(['a', 'b'
//     , 'c']) //3 function upgradedPrintFirst(arr){ let arrayLength = arr.length; if (arrayLength == 0){ console.log('Empty array') } else{ console.log(arr[0]) } } upgradedPrintFirst([3,12,7,14]); upgradedPrintFirst(['a', 'b', 'c']) upgraded
// PrintFirst([]) function upgradedPrintLast(arr){ let arrayLength = arr.length; if (arrayLength == 0){ console.log('Empty array') } else{ let lastIndex = arr.length-1 console.log(arr[lastIndex]); } } upgradedPrintLast([3,12,7,14]); upgra
// dedPrintLast(['a', 'b', 'c']) upgradedPrintLast([]) //4 function reverseArray(arr){ let lastIndex = arr.length-1; for (let i=lastIndex; i>=0; i--){ console.log(arr[i]) } } reverseArray([20, 10, 5, 1]); reverseArray(['a', 'b', 'c', 'd',
// 'e']) //5 function everyThird(arr){for (let i = 2; i<arr.length; i=i+3){ console.log(arr[i]) } } everyThird([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]); //6 function everySecond(arr){ for (let i = 2; i<arr.length; i=i+2)
// { console.log(arr[i]) } } everySecond([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]); //7 function biggerThanFour(arr){ for (let i =0; i<arr.length; i++){ let item = arr[i]; if (item > 4){ console.log(item); } } } biggerThanFour([-10
// , -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]); //8 function biggerThanNum(arr, num){ for (let i =0; i<arr.length; i++){ let item = arr[i]; if (item > num){ console.log(item); } } } biggerThanNum([-10, -5, 0, 5, 10, 15, 20, 2
// 5, 30, 35, 40, 45, 50, 55, 60], 20,);
//Arrays are 'pass-by-reference'

//This means you can change an array

//unknowingly if you change another that

//was equal to it

// let nums = [5, 4, 3, 2, 1]
//
// let newNums = nums
//
// newNums[0] = 12
//
// console.log('nums: ' + nums)
//
// console.log('newNums: ' + newNums)

//notice both changed?

//this is because newNums is NOT a new

//array, it is another name for the SAME

//array in memory on your PC

//to avoid changes to one affecting the

//other, make a NEW array

//option 1: Use a for loop to push individual items

//allows you to manipulate individual items as you

//add them into the new array

let vals = [5, 4, 3, 2, 1]

let newVals = []

for (let i=0; i<vals.length; i++){

    newVals.push(vals[i]);

}

newVals[0]=12

console.log('vals: ' + vals)

console.log('newVals: ' + newVals)

//option 2: make a shallow copy

//(only works for 1d arrays)

//does not allow you to manipulate each item as you

//add it to the new list, but is faster

let ages = [5, 4, 3, 2, 1]

let newAges = [...ages]

newAges[0] = 12

console.log('ages: ' + ages)

console.log('newAges: ' + newAges)

//to write a function to do the above

let values = [5, 4, 3, 2, 1]

compareArrays(values)

function compareArrays(arr){

    let newVals = []

    for (let i=0; i<arr.length; i++){

        newVals.push(arr[i]);

    }

    newVals[0]=12

    console.log('vals: ' + vals)

    console.log('newVals: ' + newVals)

}

//Updating a top 3 list

let highScores = [107, 99, 98]

let newScore = 101

let newHighScores = []