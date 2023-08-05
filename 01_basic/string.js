const name="suddu"
const repocount=50
// console.log(name + repocount+" value");
// console.log(`hello my name is ${name} and my repocount is ${repocount}`);

const gamename=new String('suddu-sc-abc')

// console.log(gamename[0]);
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toLocaleUpperCase());
// console.log(gamename.charAt(3));
// console.log(gamename.indexOf("u"));

let newstring = gamename.substring(0,4)//last value is not include not give -value
// console.log(newstring);

let another=gamename.slice(0,-5)//aslo conatin negative value
// console.log(another);

let another1= "    suddu     " // remove whitespaces
// console.log(another1);
// console.log(another1.trim());
// console.log(another1.trimStart());
// console.log(another1.trimEnd());

let url="https://suddu.com/suddu%20kumar"
console.log(url.replace('%20',"-"));
console.log(url.includes('suddu'));
console.log(url.includes('abc'));
console.log(gamename.split('-'));