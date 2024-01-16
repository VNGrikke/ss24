function ucln(a,b){
    while(b!==0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let x = +prompt("x");
let y = +prompt("y");
let z = +prompt("z");
let q = +prompt("q");
let ucln1 = ucln(x,y);
let ucln2 = ucln(z,q);
let KQ = ucln(ucln1,ucln2);
console.log(`Ước chung lớn nhất của 4 số: `+ KQ);
