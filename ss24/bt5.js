let a = +prompt("a");
let sum = 0;
for(let i = 1; i <=a; i++){
    sum += 1/(i**3); 
}
console.log(sum.toFixed(5));