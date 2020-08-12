/*  Get the length of the array */
/* It is Nice Question Get the Length */
var a = [1, 2];
var b = [1, 2, [3, [4, 6, 7]]];
console.log(a.length);
var count = 0;
function getLength(a) {
    if (a instanceof Array) {
        for (var i = 0; i < a.length; i++) {
            if (a[i].length) {
               getLength(a[i]);
            }
            else {
                count++;
            }
        }
    }
}
getLength(b);
console.log(count);