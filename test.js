const n = 45;

for (let i = n+1; i < (n+1)*30; i++){
    let j = 2;
    let half = Math.floor(i/2);
    for (j; j < half; j++){
        if (!(i % j)){
            break;
        }
    }
    if (i == (half*2) + 1 && i > 1){
        console.log(i);
        break;
    }
    j = 2;
}