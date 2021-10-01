const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given array?
//  extraLargeArray: insert (1.0059021 s), append (3.6355 ms)//
//  largeArray: insert (10.9643 ms), append (664.1 μs)
//  mediumArray: insert (215.7 μs), append (178.1 μs)
//  smallArray: insert (70 μs), append (165.3 μs)
//  tinyArray: insert (35.2 μs), append (92.9 μs)

//Pattern Recognition
//With the larger arrays, the insert function takes longer to run than the append function. As the size
//of the array decreases, the insert function ends up taking less time to run than the append function. 
//I think the append function runs faster since it is using the .push method that only performs one operation by adding the new element
//to the end of the array. The .unshift method adds the new element to the beginnig of the array. 
//After researching online, it looks like the time complexity of .unshift is O(n), while the time complexity of .push is O(1).

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


