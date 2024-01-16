let a = +prompt("a");
sum = 0;
for(let i = 1; sum < a/2; i++){
    if(i%2===0){
        console.log(i*i);
        sum += i*i;
    }
}