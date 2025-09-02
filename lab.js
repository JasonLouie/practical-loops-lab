// Part 1 - Fizz Buzz
for (let i = 1; i <= 100; i++){
    if (!(i % 15)){
        console.log("Fizz Buzz");
    } else if (!(i % 3)){
        console.log("Fizz");
    } else if (!(i % 5)){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Part 2 - Prime Time
let n = 45;
n = (n % 2) ? n+2 : n+1;

if (n > 0 && n < 3){ // Base case of 0 < n < 3
    console.log(3);
} else {
    for (let i = n; i < (n)*30; i+=2){
        let j = 2;
        let half = Math.floor(i/2);
        for (j; j < half; j+=1){
            if (!(i % j)){
                break;
            }
        }
        if (i == (j*2) + 1 && i > 1){
            console.log(i);
            break;
        }
        j = 2;
    }
}

// Part 3 - Feeling Loopy
const data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

let cell1 = "", cell2 = "", cell3 = "", cell4 = "";

let i = 0, rowCount = 0, text = "";

while (i < data.length){
    if (data[i] == "\n"){
        if (rowCount == 1) {
            cell1 += text;
        } else if (rowCount == 2) {
            cell2 += text;
        } else if (rowCount == 3) {
            cell3 += text;
        } else if (rowCount == 4) {
            cell4 += text;
        }
        text = "";
        rowCount++;
    } else if (rowCount > 0) {
        text += data[i];
    }
    i++
}

console.log(cell1, cell2, cell3, cell4);