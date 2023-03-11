function filter(){
    var words = document.getElementById("textarea").value;
    
    var count = 0;
    var split = words.split( ' ' );

    for(var i = 0; i < split.length; i++){
        if (split[i] != "") {
            count += 1;
        }
    }
    document.getElementById("demo").innerHTML = `Textarea ichidagi so'zlar soni ${count} ga teng !`
}
