// bubble short

function bablShort(list){
    for (var i=0; i<list.length; i++){
        for (var j=0; j<(list.length-i-1); j++){
            if (list[j]>list[j+1]){
                var tem=list[j]
                list[j]=list[j+1]
                list[j+1]=tem
        }
        }
    }

console.log(list)
}var list=[9,5,2,6,4,66,7,88,3,0,45,56]
bablShort(list)
    




