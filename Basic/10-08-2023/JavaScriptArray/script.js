const fruits = ["Banana", "Orange", "Apple", "Mango"];


//The at() method returns the same as [].
const a = fruits.at(2)
console.log(a);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];

const arr3 = arr1.concat().arr2;
console.log(arr3);

const fruit = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruit.copyWithin(2, 0));




let numbers = [1, 2, 3, 4, 5];

// Copy the elements from index 0 to index 2 (exclusive) and paste them starting from index 3
numbers.copyWithin(3, 0, 2);


const fru = ["Banana", "Orange", "Apple", "Mango", "Kiwi","push","pop"];

fru.copyWithin(5,0,2)
// ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Banana', 'Orange']



let number = [1, 2, 3, 4, 5];

// Copy the elements from index 0 to index 2 (exclusive) and paste them starting from index 3
numbers.copyWithin(3, 0, 2);
console.log(numbers); // Output: [1, 2, 3, 1, 2]



array.copyWithin(target, start, end);


// const entries = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// const iterator = entries.entries();
// for (const key of iterator) {
//     console.log(key);
// }


const entries = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

for (let [key,value] of entries.entries()) {
    console.log(key,value)
}


//output
//  0 'Banana'
//  2 'Apple'
//  1 'Orange'
//  3 'Mango'
//  4 'Kiwi'


//every(callback)
const ages = [32, 33, 23, 40];

ages.every(checkAge)

function checkAge(age) {
  return age > 18;
}

// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// The every() method does not execute the function for empty elements.
// The every() method does not change the original array



const fr = ["Banana", "Orange", "Apple", "Mango"];
fr.fill("Kiwi");

const arr= [2,3,4,5,4]

arr.every(a=> a>1)
true

//
const arrr= [2,3,4,5,4]
undefined
arrr.fill(5,0,2)
(5) [5, 5, 4, 5, 4]
arrr.copyWithin(4,0,2)
(5) [5, 5, 4, 5, 5]

// The fill() method fills specified elements in an array with a value.
// The fill() method overwrites the original array.
// Start and end position can be specified. If not, all elements will be filled.



//find()

let numb = [1, 3, 5, 7, 9];
numb.find(q=>q%2==0);


let firstOdd = numbers.find(function(element) {
  return element % 2 !== 0;
});

console.log(firstOdd); // Output: 1
// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.


//findIndex()
let findInd = [1, 4, 5, 6, 9];
numb.findIndex(q=>q%2==0);  // 1 it will retun index(position)
// The findIndex() method executes a function for each array element.
// The findIndex() method returns the index (position) of the first element that passes a test.
// The findIndex() method returns -1 if no match is found.
// The findIndex() method does not execute the function for empty array elements.
// The findIndex() method does not change the original array.


// flat()

let deeplyNestedArray = [1, [2, [3, [4]]]];
let flattenedDeepArray = deeplyNestedArray.flat(3);
console.log(flattenedDeepArray); // Output: [1, 2, 3, 4]
