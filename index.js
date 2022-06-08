
var randomnum=Math.floor(Math.random()*6+1);
var  randomnumimg="images/" +"dice"+ randomnum+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomnumimg);
var randomnums=Math.floor(Math.random()*6+1);
var  randomnumsimg="images/" +"dice"+ randomnums+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomnumsimg);
if(randomnum>randomnums){
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else{
  document.querySelector("h1").innerHTML="Player 2 wins";
}
