var arr = [10, 11, 12,  13, 14, 15];
var p = [];
// var q = []

for (var i = 0; i < arr.length; i++){
    if(arr[i]%2==0){
        p.push(arr[i])
    } //else {
    //     q.push(arr[i])
    // }
}
p = p.join(' ')
// q = q.join(' ')
console.log(p + ' sonlari 2 ga bo\'linadi');
// console.log(q + ' sonlari 2 ga bo\'linmaydi');
























// function foo (a, b, v) {
//     return a + b + v;
// }
// // console.log(foo(5, 3, 2));
// var boo = foo(12, 23, 12);
// console.log(boo)

// function rec (a){
//     console.log(a);
//     a++;
//     if(a > 15){
//         return;
//     }
//     rec(a)
// }