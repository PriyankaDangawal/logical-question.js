// creat nested list

const readline=require("readline-sync");
var num=readline.questionInt("Enter the number");
var mylist=[];
for (var i=0; i<num; i++){
    list=[]
    var name=readline.question("enter the name: ");
    var age=readline.questionInt("enter the age: ");
    list.push(name,age);
    mylist.push(list);


}console.log(mylist)

