function onStyle(){

    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    var radius = document.getElementById("radius").value;
    var color = document.getElementById("color").value;
    var demo = document.getElementById("demo")

    if (width != "" && height != "" && color != "" && radius != ""){
        demo.style.width= `${width}px`;
        demo.style.height= `${height}px`;
        demo.style.background= `${color}`;
        demo.style.borderRadius= `${radius}px`;
    } else{
        alert("qiymat kiriting")
    }
}