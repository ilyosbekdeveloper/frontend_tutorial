var a = 31
var b = 67
var c = 90
var d = 27
var e = 15

var myArray = [a, b, c, d, e];
console.log(myArray);

var x = myArray.shift;

if ( x % 2 == 0) {
    console.log('if ishladi')
    myArray[0]++
} else{
    console.log('else ishladi')
    myArray[0]++
};

console.log(myArray)

