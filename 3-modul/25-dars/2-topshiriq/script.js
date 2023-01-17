// // function that accepts n number of parameters

// function add() {
//     console.log(arguments);
//     var sum = 0;
//     for(var i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
//     }
//     console.log(add(3, 4, 7, 10));




//__________________________________________________

function boo ( ...par) {
    var summa = 0;
    for(var n of par){
        summa = summa + n
    }
    return summa;
}
var x = boo(12, 23, 34, 23, 1, 2);
console.log(x);


