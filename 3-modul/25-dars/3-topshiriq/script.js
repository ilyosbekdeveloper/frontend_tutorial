var myArr = ["olma", "davlat", "xalq", "dasturchi", "dasturlash", "google", "boolen"];
function myFunc( a, b ) {
    for (var i = 0; i <= myArr.length; i++) {
        if (myArr[i] == a){
            console.log( myArr[i] +' so\'zi array ichida mavjud')
        } 
        // else if ( myArr[i] !== a){
        //     console.log('Berilgan so\'z mavjud emas');
        // }
    }
    return myArr[i]
}
var q = "dasturchi"
var k = " jek"

var x = myFunc(q, k);