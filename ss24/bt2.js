let a = +prompt("a");
let b = +prompt("b");
let sum = 0;
if (a>b){
    for(let i = b; i<=a; i++){
        sum += i;
    }
}else{
    for(let i = a; i<=b; i++){
        sum += i;
    }
}