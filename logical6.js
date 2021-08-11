// count how many no of character of any name

const readlineSync= require("readline-sync");
var name = readlineSync.question("enter the name: ");
var i = 0;
var mydic = {};
while (i < name.length){
    var j=0;
    var count = 0;
    while (j < name.length){
        if (name[i]==name[j]){
            count++;
        }
        j++;
    }
    mydic[name[i]]=count;
    i++;    
}
console.log(mydic)
