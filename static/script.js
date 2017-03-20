var nf = document.getElementById("fileName").value;;
var _of = document.getElementById("fileName").value;
function onSave(){
    // console.log(`?save=${document.getElementById("fileName").value}&text=${document.getElementById("text").value}`);
    if(document.getElementById("fileName").value){
    window.location.assign(`?save=${document.getElementById("fileName").value}&text=${document.getElementById("text").value}`);
    _of = document.getElementById("fileName").value;
}
else{
    alert("enter fileName");
}
}
if(nf && _of && nf == _of){
        document.getElementById("download").style = 'display:inline;';
}
else{
        document.getElementById("download").style = 'display:none;';    
}
function onFilenameChange(){
    nf  = document.getElementById("fileName").value;
    if(nf == _of){
        document.getElementById("download").style = 'display:inline;';
        
    }else{
        document.getElementById("download").style = 'display:none;';        
    }
}
function onDownload(){
    window.location.assign(`?download=${document.getElementById("fileName").value}.txt`);    
}