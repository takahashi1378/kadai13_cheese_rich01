// const images = ["./img/about_04.jpg","./img/about_03.jpg","./img/about_02.jpg","./img/about_01.jpg"];
// // 以下を追記してください！
// let count = 0;
// const slideimage =()=>{
//   if( count >= images.length){
//     count = 0;
//   }else{
//     document.getElementById('slideshow').src = images[count];
//     count++;
//   }
// }
// // 以下を追記してください！
// let slideid = 0;
// const startstop = () =>{
//   if(slideid === 0){//開始ボタンを押した時の処理内容
//     slideid = setInterval(slideimage, 1000);
//   　}else{ //停止ボタンを押した時の処理内容
//     　clearInterval(slideid);
//     　slideid = 0;
//   　}
// }
// document.getElementById('startstopbtn').onclick = startstop;

// $(function(){
//   let dir=-1;
//   let interval=3000;
//   let duration = 700;
//   let timer;
// $("#relative overflow-hidden h-20 ul").prepend($("#relative overflow-hidden h-20 li:last-child"));

// $("#relative overflow-hidden h-20 ul").css("left",-1000);

// timer= setInterval(sliderTimer,interval);

// function sliderTimer(){
//   $("#relative overflow-hidden h-20 ul").animate({"left":"-=1000px"}
//     ,duration);}


// });




// Initialization for ES Users
import {
  Carousel,
  initTWE,
} from "tw-elements";

initTWE({ Carousel });