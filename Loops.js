// for loop

// for in loop is for object
// In array index order may change in for in loop
let obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (let key in obj) {
  console.log(obj[key]);
}

// forEach
// forEach calls a callback function for each element of the array
// forEach takes three parameters (value,index,array)
// forEach does not return anything
const arr = [1, 2, 4];
arr.forEach((value, index, arr) => {
  arr[index] * 2;
});
console.log(arr);

// while loop
// initialization, condition, increment or decrement
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);

// map,filter and reduce does not modify the original array, it returns a new array
// map
// map does not modifies the length of the array but modifies the element and return it as array
let inputArray = [1, 2, 3, 4, 5];
inputArray.map((element, index, array) => console.log(element));

// filter
// filter uses boolean function and changes the length of the array but does not modifies the elements
const filteredArray = inputArray.filter(
  (element, index, array) => element % 2 === 0
);
console.log(filteredArray);

// reduce
// reduce returns a single output (ie like a value);
// accumulator takes the initial vlaue if provided and current value will be 0 th index value
// if initial vlaue not provided 0 th index value is for accumulator and 1 st index is for current value
const reducedValue = inputArray.reduce((acc, cur) => acc + cur, 0);
console.log(reducedValue);
