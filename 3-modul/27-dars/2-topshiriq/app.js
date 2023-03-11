// function sozTop (){

//     var text = document.getElementById("text").value;
//     var input = document.getElementById("input").value;
//     var demo = document.getElementById("demo");

//     // if (input == text) {
//     //     demo.innerText = "Shu so'z textarea ichida mavjud"
//     // }
//     // else if (input == "" && text == ""){
//     //     demo.innerText = "ssss"
//     // }
//     // else{
//     //     demo.innerText = "BU so'z textarea ichida mavjud emas"
//     // }

//     var split = text.split( " " );

//     for(var i = 0; i < split.length; i++){
//         if (split[i].length == input && input== split[i].length) {
//             demo.innerText = "Shu so'z textarea ichida mavjud"
//         }
//         else {
//             demo.innerText = "Bu so'z textarea ichida mavjud emas"
//         };
//     };

// }; 


const input = document.querySelector('#input');
const textarea = document.querySelector('#textarea');
const message = document.querySelector('.message');
let textAreaData = '';
let inputData = '';

textarea.addEventListener('input', (e)=>{
    textAreaData = e.target.value;
});

input.addEventListener('input', (e)=>{
    inputData = e.target.value;

    inputData.split(' ').map((item)=>{
        if(textAreaData.split(' ').includes(item)){
            message.innerHTML = 'Siz yozgan ba\'zi bir matnlar textAreada mavjud!';
            message.classList.add('text-success');
        }
        else{
            message.innerHTML = '';
        }
    })
});


