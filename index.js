var express=require("express");
var socket=require("socket.io");//server ı kullanıcak

var app=express();//server ın uygulamasını oluştrduk
var server=app.listen(4000, function(){ //portu dinliyoruz
    console.log("4000. port dinleniyor");
});

app.use(express.static("public"));//express burdan public klasörüne ulaşarak html kodlara kullanır

var io=socket(server);//soketi kullanrak server ile iletişimi sağlayacak

io.on("connection",function(socket){
    console.log("socket bağlantısı yapıldı", socket.id);
    socket.on("chat",function(data){
        io.sockets.emit("chat",data);
    });
 
    socket.on("yaziyor",function(data){
        socket.broadcast.emit("yaziyor",data);
    });
});



