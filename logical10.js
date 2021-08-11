// palindrome 

var Name=["k","a","y","a","k"]
var Lenght=Name.length;
var index= Lenght-1
var list=[]
while (index>=0){
    list.push(Name[index])
    index--;}
console.log(Name)
console.log(list)
if (JSON.stringify(Name)==JSON.stringify(list)){
    console.log("its a palindrome")
}else{
    console.log("its not a palindrome")
}
