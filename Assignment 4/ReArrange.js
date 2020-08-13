/* Rearrange  :) */

function reArrange(str)
{
    console.log(typeof(str))
    var a =[];
    var index =0;
    var s = "";
    var number = /^[0-9]+$/;
    for(var i=0;i<str.length;i++)
    {
        if(str[i]== " ")
        {
            console.log(str[i])
            console.log(s);
            a[index-1]= s;
            console.log(a[index-1]);
            s=""
            continue;
        }
        else{
            
            if(str[i].match(number))
            {
                index = parseInt(str[i]);
                console.log(index);
            }
            else{
                s= s + str[i];
               /// console.log(s);
            }
        }
    }
    a[index-1]=s;
    console.log(a);
    s="";
    for(var i=0;i<a.length;i++)
    {
        s = s+" "+ a[i]; 
    }
    return s;
}

console.log(reArrange("is2 This1 T4est 3a"));