//Primitive data types

//string
console.log("hello world");
console.log(typeof "my mane is bashir");
console.log(typeof "hello world");

//working with number
console.log(26);
console.log(10 + 23);
console.log(34 - 23);
console.log(3 * 5);
console.log(100 / 23);
console.log(typeof 34);
//modulus (vagshes)
console.log(10 % 2);
console.log(20 % 7);

//exponential operation (power hisebe kah kore)
console.log(3 ** 5); //3 ^ 5= 3 * 3 * 3 * 3 * 3 = 243
console.log(2 ** 3); //2 ^ 3= 2 * 2 * 2 = 8

//boolean
console.log(typeof true);
console.log(typeof false);
console.log(typeof false);
console.log(typeof true);

//undefined
let hello;
console.log(hello);
console.log(typeof hello);

//null
let hello1 = null;
console.log(hello1);
console.log(typeof hello1); //it's a javaScript bug
//symbol
console.log(typeof Symbol("hasibul"));
console.log(typeof Symbol("hasibulddd"));

//big int
console.log(typeof 1234n);
console.log(typeof 45n);

//concatenation
console.log("bashir " + "ahamed");
console.log("bashir" + " " + "ahamed");

//template string
console.log("bashir ahmed 'shohel");
console.log(`this is the fact " Man is mortal"`);

//length
console.log(`this is the fact " Man is mortal"`.length);

//indexof
console.log(`this is the fact " Man is mortal"`[21]);
console.log(
  `this is the fact " Man is mortal"`[
    `this is the fact " Man is mortal"`.length - 1
  ]
);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//variable declaration
//var, let, const
var myName = "Bashir";
var fullName = myName + " Ahamed";
console.log(fullName);

let lastName = "Ahamed";
console.log(myName + " " + lastName);

const profession = "Doctor";
console.log(myName + " " + lastName + " is a " + profession);

//when you have to reassign(change) the variable value after declaration, using let
//when you do not have to change the variable value after declaration, using const
//95%+ time we will use, const

//let can change own value
lastName = "khan";
//const can't change own value //produce error
//profession = "student"
console.log(myName + " " + lastName + " is a " + profession);

//using template string
const info = `${myName} ${lastName} is a ${profession}`;
//console.log(`${myName} ${lastName} is a ${profession}`);
console.log(info);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//single line comment
/* 

multi line comment

  */
