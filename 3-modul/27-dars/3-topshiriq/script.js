

// function file(){
//     var myInp = document.getElementById("file")
//     let fileSize = myInp.files[0].size.toString();

//     if(fileSize.length < 7) return `${Math.round(+fileSize/1024).toFixed(2)}kb`

//     alert(fileSize)

// }


// var d = document.getElementById("file").ready(function() {
//     d.change(function jek (event) {
//         var _size = this.files[0].size + 'mb';
//         alert(_size);
//     });
// });

(function() {
    document.querySelector('input[type="file"]').addEventListener("change", function(event) {
        var _size = this.files[0].size;
        var fSExt = new Array('Bytes', 'KB', 'MB', 'GB'),
        i=0;while(_size>900){_size/=1024;i++;}
        var exactSize = (Math.round(_size*100)/100)+' '+fSExt[i];
        document.getElementById("demo").innerText =`Faylning hajmi  ${exactSize} ga teng`
    });
})();