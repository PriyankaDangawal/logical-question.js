var i=0;
var count=0;
const readline=require("readline-sync");
function prime_numbers(x){
    if (x>=2){
        for (y in  (2,x)){
            if (! (x%y)){
                return false
            }
        }
    }else{
        return false
    }return true

}prime_numbers()
var num= readline.questionInt("enter the last number where you want: ")
for (var x in num){
    if(prime_numbers(x)){
        i++;
        count++;
        console.log(j)
    }

}console.log("we found",count,"prime number around the",num,"number::")


// prime_numbers()
// for (x in (num=readline.question("enter last number where you want: "))){
//     if (prime_numbers(x)){
//         