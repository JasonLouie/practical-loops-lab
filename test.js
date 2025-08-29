const n = 2;

for (let i = n+1; i < (n+1)*30; i++){
    let j = 2;
    let half = Math.floor(i/2);
    for (j; j < half; j++){
        if (!(i % j)){
            break;
        }
    }
    console.log(`i: ${i}, j: ${j}`)
    if (j == Math.floor(i/2) && i % 2){
        console.log(i);
        break;
    }
    j = 2;
}