// Count down from 10 to 1.
for (let i = 10; i >= 1; i--){
    console.log(i);
}

// Output odd numbers from 1 to 10.
for (let i = 10; i >= 1; i--){
    if (i % 2){
        console.log(i);
    }
}

// Output even numbers from 1 to 10.
for (let i = 10; i >= 1; i--){
    if (i % 2 == 0){
        console.log(i);
    }
}

// Output multiples of 3, starting at 6 and ending at 60.
for (let i = 6; i <= 60; i++){
    if (i % 3 == 0){
        console.log(i);
    }
}

// Output an increasing number of # symbols, from 1 to 7, as shown below.
let msg = "#";
for (let i = 0; i < 7; i++){
    console.log(msg);
    msg += "#";
}

// PART 2
let number = 100;

// Count down to 0 from a given number
while (number >= 0) {
    console.log(`${number}`);
    number--;
}

// Log integers in multiples of 3 as lnog as they are less than 35.
let num = 0;
while (num < 35){
    if (!(num%3)){
        console.log(`${num} is a multiple of 3 and less than 35.`);
    }
    num++;
}

// Reset num to 0
num = 0;
// Log integers in multiples of 5 as long as they are less than 100.
while(num < 100){
    if(!(num%5)){
        console.log(`${num} is a multiple of 5 and less than 100.`);
    }
    num++;
}

// Reset num to 0
num = 0;
// Print integers between 0 and 20 such that even numbers are multiplied by 3
while (num >= 0 && num <= 20){
    if (!(num % 2)){
        console.log(num * 3);
    }
    num++;
}

// Bonus Logical Question
const cookie = 4;
let money = 10;
let quarters = 0;

while(cookie < money){
    money--;
    quarters+=4;
}

console.log(`Romeo received ${quarters} quarters.`);