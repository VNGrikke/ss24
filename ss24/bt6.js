let a = +prompt("a");
let b = 0;
if(a>0 && a%1===0){
    let chuoiso = a.toString();
    let n = chuoiso.length;
    for(let i = 1; i <= n;i++){
        b = b*10 + Math.trunc((a%10**i)/10**(i-1));
    }
}
console.log(b);