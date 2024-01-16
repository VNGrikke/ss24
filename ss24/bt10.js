let n = +prompt("nhap so dong");
let s = "**********";
let chuoicon = "*";
if( n > 0 && n % 1 === 0){
    for(let i = 0; i < n; i++){
        console.loJg(s);
        s = s.replace(new RegExp(chuoicon), '');
    }
}