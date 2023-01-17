var ar = [10, 20, 30, 40, 50];
console.log(ar);

function myArr(a) {

    for(var i= 0; i <= ar.length; i++){
        if(ar[i] == a){

            console.log(`${a} va soni array ichida mavjud`);
        
        } else if(ar[i] !==a) {
            console.log(' hc nma yoq') 
        }
    }

}

var x = myArr(20);
console.log(x)