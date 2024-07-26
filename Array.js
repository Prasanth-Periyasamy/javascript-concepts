// Different ways of creating array

// concat (shallow copy)
const arr1 = [1,5,6,8];
const concatedArr = [].concat(arr1,9,[0,2]);
console.log("concatedArr",concatedArr);

// objects keys and values
const obj = {1:"p1",2:"p2",3:"p3"};
console.log("objKeys",Object.keys(obj));
console.log("objKeys",Object.values(obj));
console.log("objKeys",Object.entries(obj));