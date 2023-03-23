//create

let students = ['Adam', 'Brad', 'Casey', 'David'];

let values = [1, 2, 3, 4];

//accessing items in array

console.log(students);

console.log(students[0]); //beginning item has index or position 0

console.log(students[1]); //index 1 means 1 item away from the beginning, or 2nd

console.log(students[2]);

console.log(students[3]);

console.log(students[4]) //error, as there is no 5th item

console.log(students[4-2]);

//formatting items in array

console.log('Student: ' + students[1]);

console.log(`Student 2: ${students[3]}`);

//changing an item

students[1]='Stephanie';

console.log(students);

//push adds to the end

students.push('Eve');

console.log(students);

students.push('Fred', 'Georgia'); //you can push more than 1 item at a time

console.log(students);

//pop removes the last item from the end

students.pop()

console.log(students);

//shift removes the beginning item

students.shift();

console.log(students);

//unshift adds an item to the beginning

students.unshift('Zeke');

console.log(students);

students.unshift('Yvonne', 'Xavier'); //you can unshift more than 1 item

console.log(students);

//length of array = number of items in it

console.log('the number of items in the array:');

console.log(students.length);

console.log('to access the LAST item in an array, use index: length-1')

console.log(students[students.length-1]);

//slice up a piece of the original array

let fruits = ['apple', 'banana', 'orange', 'lemon', 'grape'];

let citrus = fruits.slice(2, 4)

//first number is the starting index, which we include

//second number is the index we stop BEFORE. Does not include.