

// Array Find
const array1= [5,12,8,120,44];
let found = array1.find(element=>{
    return element >100;
});

console.log(found);

// Array File index

function isLargerNumber(element){
    return element >5;
}

console.log(array1.findIndex(isLargerNumber));

