const util = require('util');
util.inspect.defaultOptions.maxArrayLength = null;
console.log("******************  Assignment No 1 ******************");

// Using iteration
function fibs(n) {
    let sequence = [];
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        let c = a + b;
        a = b;
        b = c;
    }
    return sequence;
}
console.log("By Using Iteration \n\n", fibsRec(8));
//Using Recursion
function fibsRec(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let sequence = fibsRec(n - 1);
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
        return sequence;
    }
}



console.log("By Using Recursion \n\n", fibs(9));

console.log("******************  Assignment No 2 ******************");


function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    const sortedLeftArray = mergeSort(leftArray);
    const sortedRightArray = mergeSort(rightArray);

    return merge(sortedLeftArray, sortedRightArray);
}

function merge(leftArray, rightArray) {
    const sortedArray = [];

    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift());
        } else {
            sortedArray.push(rightArray.shift());
        }
    }

    while (leftArray.length) {
        sortedArray.push(leftArray.shift());
    }

    while (rightArray.length) {
        sortedArray.push(rightArray.shift());
    }

    return sortedArray;
}

console.log("Unsorted Array: \n\n", [4, 2, 6, 5, 3, 9, 8, 7, 1]);
// console.log("Sorted Array",mergeSort([4, 2, 6, 5, 3, 9, 8, 7, 1]),{ maxArrayLength: null });
// console.log("Sorted Array", mergeSort([4, 2, 6, 5, 3, 9, 8, 7, 1]), { maxArrayLength: null });

console.log("Sorted Array: \n\n", mergeSort([4, 2, 6, 5, 3, 9, 8, 7, 1]))