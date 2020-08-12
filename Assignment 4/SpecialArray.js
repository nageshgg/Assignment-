/*SpecialArray */
function specialArray(arr)
{
    if(arr instanceof Array)
    {
        for(var i=0;i<arr.length;i++)
        {
            if(((i % 2 == 0) && (arr[i] %2 == 0))){
                continue;
            }
            else if(((i % 2 == 1) && (arr[i] %2 == 1))){
                continue;
            }
            else
            {
                return "False";
            }

        }
    }
    return "true";
}
var a=[0,1,2,3,4];
console.log(specialArray(a));