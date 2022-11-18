

const array1 = [1,2,3,4];
const reducer = (accumuator,currenValue) => accumuator + currenValue;

console.log(array1.reduce(reducer));

console.log(array1.reduce(reducer,5));

const array2 = [[0,1],[2,3],[4,5]].reduceRight(
    (accumuator,currenValue) => accumuator.concat(currenValue)
);

console.log(array2);