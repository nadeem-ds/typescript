console.log('Time to get started...');


//javascript is dynamic type but typescript is static type

function add(num1:number,num2:number,showRes:boolean,phrase:string){


    // if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    //     throw new Error("Incorrect input"); 
    // }

    //types of data types in typescript
    // 1.number
    // 2.boolean
    // 3.string

    let result = num1+num2;
    if(showRes){
        console.log(phrase+result);
    }else{

        return num1+num2;
    }
}

//In javascript Number and String is diff in typescript number and string

let a = 10;
let b = 20;

const printres = true;
const phrase = "The result is ";


let data:number;
data=30;

let price:number;
price="20";




// const res = add(a,b,printres);
// console.log(res);

add(a,b,printres,phrase)

