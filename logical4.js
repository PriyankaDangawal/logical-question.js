const readlineSync=require("readline-sync");
var n=readlineSync.questionInt("Enter the number: ")
function number(n){
        if (String(n) == 1){
        return 0;
    }let count=0;
    while (String(n).length>1){
        let total = 1
        for (i in String(n)){
            total *= parseInt(i)
        n=total
        count++;
        }
    }return n;
    
}console.log(number(n));
