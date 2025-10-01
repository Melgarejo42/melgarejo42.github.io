/* 
const product = {
    name: 'socks',
    price: 1090,
};

function log() {
    console.log(user);
}

let user = {
    name: 'Bruno',
    age: 33,
    height: 180,
    salary: 5000,
    hairColor: 'black',
    birthYear: 1990,
}

function rename() {
    user.name = prompt("What's your name");
} */


const product1 = {
    name: 'cheap basketball',
    price: 1000,
}

const product2 = {
    name: 'Wilson basketball',
    price: 2095,
}

product1['delivery-time'] = '3 days';

console.log(product1.price + 500);

function comparePrice(product1, product2) {
    if (product1.price < product2.price) {
        return product1;
    } else {
        return product2;
    }
}

console.log(comparePrice(product1, product2));


// 1. Print numbers from 1 to 10

/* for (let i = 1; i <= 10; i++) {
    console.log(i)
}
 */
// 2. Calculate the sum of the first 10 natural numbers

/* var n = 10;
var total = 0;

for (var i = 1; i <= n; i++) {
    total += i;
}
 */

// 3. Print multiplication table
/* 
let n = 5;

for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i))
} */

// 4. Calculate factorial (Write a program to calculate the factorial of a given number. Ex: 5! = 5x4x3x2x1)

/* let n = parseFloat(prompt("Enter a number:"));
let factorial = 1;

for (let i = n; i >= 1; i--) {
    factorial *= i;
}

console.log("Factorial of", n, ":", factorial);

 */

// 5. Print even numbers from 1 to 20

/* for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
} */

// 6. Print odd numbers from 1 to 20

/* for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
} */



// 6. Print Fibonacci series



// 7. Count vowels in a string


