console.log('Time to get started...');


function add(num1:number,num2:number){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        throw new Error("Incorrect input"); 
    }
    return num1+num2;
}

let a = "10";
let b = 20;

const res = add(a,b);
console.log(res);