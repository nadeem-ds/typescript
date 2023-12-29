// const person :{
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number,string];
// } = {
//     name:"Nadeem",
//     age:30,
//     hobbies:["sport","cooking"],
//     role:[2,'author']
// };

// person.role[1] = "play";

// person.role=[0,"admin","user"];   //it will give error





let favGame:string[];
favGame=["sport","bool"]

let favSport:any[];
favSport=["sport","bool",2]

// for(const hobby of person.hobbies){
//     console.log(hobby.toUpperCase());
//     // console.log(hobby.map())   //it will give error beacuse indivisual value are just string
// }


// console.log(person.name);




//enum in ts
const ADMIN = 0;
const READ_ONLY= 1;
const AUTHOR = 2;


const person = {
    name:"Nadeem",
    age:30,
    hobbies:["sport","cooking"],
    role: ADMIN,
};

if(person.role===0){
    console.log("is admin");
}