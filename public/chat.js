var socket=io.connect("http://localhost:4000");//client

var mesaj=document.getElementById("mesaj");
var baslik=document.getElementById("baslik");
var btn=document.getElementById("gonder");
var output=document.getElementById("output");
var feedback=document.getElementById("feedback");

btn.addEventListener("click",function(){
    socket.emit("chat",{
        mesaj:mesaj.value,
        baslik:baslik.value 
    });
    mesaj.value="";
}); 
mesaj.addEventListener("keypress", function(){
    socket.emit("yaziyor", baslik.value);
});

socket.on("chat", function(data){
    feedback.innerHTML="";
    output.innerHTML+='<p><strong>'+data.baslik+':</strong>'+data.mesaj+'</p>';
    
});



socket.on("yaziyor", function(data){
    feedback.innerHTML = '<p><em>' + data + ' yazıyor...</em></p>';
});