const A = [1, 2, 3, 4, 5, 6, 2, 3, 1, 5, 7];
// console.log(A);

//newv arr
const arr = [];
//Set numbers
const newSet = new Set(A);
newSet.forEach((i)=>{

    arr.push(i);

});

console.log(arr);