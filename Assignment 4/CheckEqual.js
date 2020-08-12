/* Check for Equla array*/

function checkEquals(a , b) {
    console.log(a)
    if ((a instanceof Array) && (b instanceof Array)) {
       
        console.log(a.length);
        if (a.length != b.length){
            return "not Equal";
            console.log("Hi");
        }
        else {
          ///  console.log("ji");
            for (var i = 0; i < a.length; i++) {
                if (a[i] != b[i]){
                    return "not Equal";
                }
            }
            return "equals";
        }
    }
    else{
        return "Please Enter the Array to run this ";
    }
}

var arr1 = [1,3];
var arr2 = [1,5,3];
console.log(checkEquals(arr1 , arr2));