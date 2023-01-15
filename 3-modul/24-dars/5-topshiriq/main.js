var ar = [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 44, 4];
console.log(ar)
const remove = 4;
const result = ar.filter(
    item => item != remove
)
console.log(result)
// var res =[]

// for(var v = 0; v<=ar.length; v++){  
// if (ar[v] == 4){
//     res.push(ar[v])
//     console.log(v)
// }
// };
