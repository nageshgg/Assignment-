/* Remove Leading Trailing  */

function removeLeadingTrailing(str) {
    var ans = "";
    var con = false;
    var con1= true;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ".") {
            ans= ans+str[i];
            con = true;
            continue;
        }
        else if (con) {
            if (str[i] == "0") {
                break;
            }
            else {
                ans += str[i];
            }
        }
        else if(str[i]== "0" && con1)
        {
            continue;
        }
        else{
            con1= false;
            ans = ans+str[i];
           // console.log(ans);
        }
    }
    return ans;
}

console.log(removeLeadingTrailing("8903.1500"))