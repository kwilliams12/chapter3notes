// Parameters are placeholder variables that allow us to reuse functions

// Example 1: Without Parameter

function printYes(){

    console.log('yes');

}

printYes(); //prints 'yes' when called

printYes(); //prints 'yes' when called

//Example 2: With parameter

function printText(text){ //one parameter called text

    console.log(text);

}

printText('yes'); //argument 'yes' replaces parameter text

printText('no'); //argument 'no' replaces parameter text

//Return statements provide values to the rest of the program

//Returned values can be used by other parts of the code

//console.log only produces "side effects" that cannot be used by other parts of the code

//Example 3: With side effects (no return)

function double(num){

    console.log(num*2);

}

double(3);

//Example 4: Using return

function triple(num){return (num*3);

}

console.log(triple(5)); //to print out the value returned

let lives = triple(7); // to use the value returned in the rest of the program,

lives = lives-1; //save it to a variable and continue on with your code

console.log(lives);

//Scope is the part of the program where the binding (value of a variable) is visible.

//global scope: created outside all {} and accessible everywhere

//local scope: created inside a {} and only accessible inside that {}

//Example 5: Different scopes

let x=10; //global x

if (true){

    let y=20; //local y

    let z= 30; //local z

    console.log(x + y + z);

}

console.log(x); //y and z are not accessible outside the {} where they were created

//Example 6: no naming conflict

function half(n){ //local n created is accessible inside this function only

    return (n/2);

}

let n=10; //global n is NOT THE SAME n

console.log(half(100)); //go to the half function and use THAT n.

console.log(n); //since there is no direction to go to {}, use the global n