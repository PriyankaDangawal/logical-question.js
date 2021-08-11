// convert binary no to decimal no

let binary_number = [1,0,1,0,1,0,0,1];
var len = binary_number.length;
var index = len-1;
var a = 1;
var sum = 0;
while (index >= 0){
    var element = binary_number[index]
    var binary = element*a
    sum = sum + binary
    index = index - 1
    a = a * 2
}console.log(sum)



