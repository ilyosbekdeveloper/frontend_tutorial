// var state = false;

// function toggle(){
//     if(state){
//         document.getElementById("password").setAttribute("type", "password");
//         state = false;
//     }
//     else{
//         document.getElementById("password").setAttribute("type", "text");
//         state = true;
//     }
// }


function toggles(){
    var x = document.getElementById("password");

    if(x.type == "password"){
        document.getElementById("password").setAttribute("type", "text")
    } else{
        document.getElementById("password").setAttribute("type", "password")
    }
}
