// avarage of nested list items

var marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65],
    [95, 45, 78],
    [87, 67, 49, 68, 88]
] 
n=marks.length
let i=0
var sum = 0
var k=marks[0].length+marks[1].length+marks[2].length+marks[3].length
while(i<n){
    var j=0
    b=marks[i].length
    while(j<b){
        sum=sum+marks[i][j]
        j=j+1
    }
    i=i+1
}
console.log(sum/k)