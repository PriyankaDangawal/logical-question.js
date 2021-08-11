// find enter thing is str int or float

const readline = require("readline-sync");
var name=readline.question("enter the user choice: ");
if (typeof(name===String)){
    console.log("string")
}else if(typeof(name==Int16Array)){
    console.log("integer")
}else{
    console.log("float")
}