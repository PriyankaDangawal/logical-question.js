// find out max and min number in one loop

var list=[23,45,34,89,90,65,2,34,5];
var i=0;
var max=list[i];
var min=list[i];
for (var i=0; i<list.length; i++){
    if (max<list[i]){
        max=list[i];
    }else if(min>list[i]){
        min=list[i];
    }
}console.log(max,"maximum number");
console.log(min,"minium number")
    