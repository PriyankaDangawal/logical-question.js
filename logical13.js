// using bubble short mathod short odd nomber and not change even numbers position

var a=[9,8,7,6,5,4,3,2,1,0];
var i=0
while (i<a.length){
    if(a[i]%2!=0){
        var j=i+1
        while (j<a.length){
            if(a[j]%2!=0){
                if (a[i]>a[j]){
                    let temp=a[i]
                    a[i]=a[j]
                    a[j]=temp
                }
                


            }j++
        }
    }i++
}
console.log(a)