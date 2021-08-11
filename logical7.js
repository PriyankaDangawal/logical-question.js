// create nested dictinory

const readlineSync = require("readline-sync");
var num= readlineSync.questionInt(" enter the number: ")
var i=0;
var myDist={};
while (i<num){
    var name=readlineSync.question("enter the name: ");
    var age=readlineSync.questionInt("enter the age: ");
    myDist[name]=age;
    i++
}
console.log(myDist)


