//  primitive datatype
// 7types

// null, number, boolean,bigint,string,symbol,undefine

const score=100
const scoreValue=100.3

const isLogedIn=false//boolean
const outsideTemp=null//null
let useremail;//undefined

const id = Symbol("123")
const anotherid=Symbol('123')
console.log(id===anotherid);

// const bigNumber =55555555555555555555n//bigint


// reference dataype(non-premitive)

// arrays,objects,functions

const heros=["shaktiman","naagraj","dooga"];
let myObj={
    name:"suddu",
    age:23
}

const myfunction=function(){
    console.log("hello world");

}
console.log(typeof heros);
console.log(typeof myfunction);//function
console.log(typeof anotherid);//object
myfunction()