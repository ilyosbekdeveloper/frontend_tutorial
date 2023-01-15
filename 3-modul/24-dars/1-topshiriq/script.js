const arr = [];
var su = 0;
const x = 10;
for (var i = 1; i <= x; i++) {
    if ( i % 2 !== 0) {
        arr.push(i);
    };
}

const initialValue = 0;
const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

console.log(sumWithInitial);


const arr1 = [];
var su = 0;
const x1 = 10;
for (var i = 1; i <= x1; i++) {
    if ( i % 2 === 0) {
        arr1.push(i);
    };
}

const initialValue1 = 0;
const sumWithInitial1 = arr1.reduce(
    (accumulator, currentValue, initialValue1) => accumulator * currentValue *
    initialValue1
);

console.log(sumWithInitial1);





















// var i = 1
// while(i<= arr.length){
//     su+=arr[i];
//     i++;
// };
// console.log(su)

// for (var v = 1; v <= arr.length; v++){
//     su = su + arr[v]
// }
// console.log(su)