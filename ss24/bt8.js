let n = +prompt("n");
let a = 1;
let i = 0;
if(n>0 && n%1===0){   
    while( i < n){
        if( a === 2 || a===3 || a===5 ){
            console.log(a);
            i++;
        }
        if(a%2!==0 && a%3!==0 && a%5!==0 && a!==1) {
            console.log(a);
            i++;
        }
        a++;
    }
}