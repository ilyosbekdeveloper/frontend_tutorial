var arr = [10, 11, 12,  13, 14, 15];
var p = [];

for (var i = 0; i < arr.length; i++){
    if(arr[i]%2==0){
        p.push(arr[i])
    }
}
p = p.join(' ')
console.log(p + ' sonlari 2 ga bo\'linadi');

