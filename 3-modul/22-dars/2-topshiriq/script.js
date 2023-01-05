var a = Math.random() * 100;
    a = parseInt(a);

if(a % 5 == 0){
    console.log(`${a} soni 5ga bo'linadi`)
} else if ( a % 3 == 0){
    console.log(`${a} soni 3ga bo'linadi`)
} else if (a % 3 == 0, a % 5 == 0){
    console.log(`${a} soni 3ga va 5ga bo'linadi!`)
} else {
    console.log(`${a} soni 3ga vs 5ga bo'linmaydi!`)
}