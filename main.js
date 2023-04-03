var canvas=new fabric.Canvas("myCanvas")
var playerx=400
var playery=225
var alturabloco=45
var largurabloco=45
var playercara=""
var blocos=""
function mostrarplayer(){

    fabric.Image.fromURL("player.png",function(img){
        playercara=img
        playercara.scaleToWidth(125)
        playercara.scaleToHeight(125)
        playercara.set({
            top:playery,left:playerx
        })
        canvas.add(playercara)
    })
}
function newimagem(blocoescolido){
    
    fabric.Image.fromURL(blocoescolido,function(img){
        blocos=img
        blocos.scaleToWidth(largurabloco)
        blocos.scaleToHeight(alturabloco)
        blocos.set({
            top:playery,left:playerx
        })
        canvas.add(blocos)
    })
}
window.addEventListener("keydown",meubotao)
function meubotao(e){
    teclaapertada=e.keyCode
    console.log(teclaapertada)
    if(e.shiftKey==true&& teclaapertada=="80"){
        alturabloco+=10
        largurabloco+=10
        document.getElementById("currentWidth").innerHTML= largurabloco
        document.getElementById("currentHeight").innerHTML= alturabloco
    }
    if(e.shiftKey==true&& teclaapertada=="77"){
        alturabloco-=10
        largurabloco-=10
        document.getElementById("currentWidth").innerHTML= largurabloco
        document.getElementById("currentHeight").innerHTML= alturabloco
    }
    if(teclaapertada=="38"){
        up()
    }
    if(teclaapertada=="40"){
        down()
    }
  if(teclaapertada=="37"){
        left()
}  if(teclaapertada=="39"){
        right()
}
if(teclaapertada=="87"){
    newimagem("wall.jpg")
}
if(teclaapertada=="71"){
    newimagem("ground.png")
}
if(teclaapertada=="76"){
    newimagem("light_green.png")
}
if(teclaapertada=="84"){
    newimagem("trunk.jpg")
}
if(teclaapertada=="82"){
    newimagem("roof.jpg")
}
if(teclaapertada=="89"){
    newimagem("yellow_wall.png")
}
if(teclaapertada=="68"){
    newimagem("dark_green.png")
}
if(teclaapertada=="85"){
    newimagem("unique.png")
}
if(teclaapertada=="67"){
    newimagem("cloud.jpg")
}
}
function up(){
    if(playery>0){
       playery=playery-10 
    mostrarplayer()
    canvas.remove(playercara)
    }
}
function down(){
    if(playery<450){
       playery=playery+10 
    mostrarplayer()
    canvas.remove(playercara)
    }
}
function right(){
    if(playerx<800){
       playerx=playerx+10 
    mostrarplayer()
    canvas.remove(playercara)
    }
}
function left(){
    if(playerx>0){
       playerx=playerx-10 
    mostrarplayer()
    canvas.remove(playercara)
    }
}































