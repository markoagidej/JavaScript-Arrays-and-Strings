// Task 1: Adding and Removing Elements
let fruits = ['apple', 'banana', 'orange'];
console.log("Initial Array: " + fruits);

fruits.push("strawberry");
console.log("Pushed Array: " + fruits);

fruits.pop();
console.log("Popped Array: " + fruits);

// Task 2: Sorting Arrays
let numbers = [3, 1, 5, 2, 4];
numbers.sort((a,b) => a - b);
console.log("Sorted numbers: " + numbers);

// Task 3: Applying Array Methods
let doubled = numbers.map(num => num * 2);
console.log("Doubled numbers: " + doubled);

let filtered = numbers.filter(num => num % 2 === 0);
console.log("Even numbers: " + filtered);

let summed = numbers.reduce((acc, curr) => acc + curr);
console.log("Sum: " + summed);