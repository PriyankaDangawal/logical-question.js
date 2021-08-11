// find out maximum value

var myDict={'a':5000,
            'b':58, 
            'c':60,
            'd':400,
            'e':10,
            'f':200
        };
        var myList=[];
        var i=0;
        while (i<3){
            max1=0;
            for (key in myDict){
                if (max1<myDict[key]){
                    max1=myDict[key]
                    i=key
                i++;
                }
            }myList.push(max1)
            delete myDict[i]
        }console.log(myList)
