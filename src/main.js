let arr = [1,2,3];
let brr = [4,5];
console.log([...arr,...brr]);

let printTable = (x)=>{
    var out = [];
    for(let i = 1; i <= 10; ++i){
        out.push(i*x);
    }
    console.log(...out);
}
printTable(5);