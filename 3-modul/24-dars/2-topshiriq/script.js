var n = [24, 25, 26, 27, 45, 65, 12];
var j = [];
var t = []
for (var i = 1; i <= n.length; i++) {
    if(i%2==0){
        j.push(i)
    } else{
        t.push(i)
    }
}
console.log(`Arrayda ${j.length} ta juft ${t.length} ta toq son bor`)
// console.log(`Arrayda ${t.length} ta juft son bor`)
