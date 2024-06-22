/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    return a + b;
}
console.log(addTwoNumbers(45, 5));

// Arrow Function With Parameters

const addTwoNumbers1 = (a, b) => {
    return a + b;
}
console.log(addTwoNumbers1(3, 95));

// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => a + b;
console.log(addTwoNumbers2(143, 56));


// Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello there!');

// Returning Objects

const returnPerson = () => ({name: 'Adam'});
console.log(returnPerson());


// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
        This is a multiline string!
    </p>`
);
console.log(returnMultipleLines());

