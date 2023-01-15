// function f(str, l) {
//     var arr = str.split('');
//     var result = [];
//     for (var i = 0; i<=arr.length; i++){
//         if (arr[i] === l){
//             result.push(i)
//         }
//     }
//     console.log(result.length)
// }
// f('assalom', 'a')


// // var xWord = 'assalomualeykum';
// // xWord.split('')
// // console.log(xWord)









// function vowles(str){
//     const cw = ['a', 'e', 'i', 'o', 'u'];
//     const sw = [];

//     for (let char of cw){
//         if(cw.includes(char)){
//             sw.push(char)
//         }
//     }
//     return sw.length
// }








var x = 'assalom broo';
console.log(x)
function vw(str){
    var count = 0;
    var vws = "aeiou";

    for(var i = 0; i < str.length; i++){
        if (vws.indexOf(str[i]) > -1) {
            count++;
        }
    }
    console.log("bu so'zda " + count + " ta unli harf bor")
    return "bu so'zda " + count + " ta unli harf bor"


}
vw('assalom broo')


