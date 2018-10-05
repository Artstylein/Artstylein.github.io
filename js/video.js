// play video when user enters room. Pause when leaving
const video = document.getElementById('theaterVideo');
const lady = document.getElementById('lady');
const DEvideo = document.getElementById('DEVideo');
const ATVideo = document.getElementById('ATVideo');
const DAVideo = document.getElementById('DAVideo');
const PVideo = document.getElementById('PVideo');
const night = document.getElementById('night');
video.pause();
DEvideo.pause();
night.pause();
ATVideo.pause();
DAVideo.pause();
PVideo.pause();
var finish = false;

AFRAME.registerComponent('listener', {
  tick: function () {
    const userPositionZ = this.el.getAttribute('position')["z"]; 
    const userPositionX = this.el.getAttribute('position')["x"];
    const bot = document.querySelector('#bot');   
    const won = document.querySelector('#won'); 
    //console.log("X:" +userPositionX);  
    //console.log("Z:"+ userPositionZ);
    if (userPositionZ <= -17) {
       var currentAction = "clip : jump";
       bot.setAttribute("animation-mixer",currentAction);
       bot.setAttribute("position","-1.5  0 19.5");
       bot.setAttribute("rotation","0 -180 0");    
      video.play();
    } else {
      video.pause();
    }
   
   if (userPositionZ >=8 && userPositionZ<=12 ){
       var currentAction = "clip : idle ";
       bot.setAttribute("animation-mixer",currentAction);
   }
   else{
       var currentAction = "clip : walk ";
       setTimeout(bot.setAttribute("animation-mixer",currentAction),500);
   }      
    
         
         
   if (userPositionX >= 5 && userPositionZ>=18 ) {
       finish =true;
       console.log(finish);
       
       var currentAction = "clip : walk ";
       bot.setAttribute("animation-mixer",currentAction);
       bot.setAttribute("position","-1.5  0 10.5");
       lady.setAttribute("position","2.000 0 17.000");
       won.setAttribute("visible","true");
       
       
    }      
   if (userPositionX <= -3 && userPositionZ>=4 && userPositionZ<=11) {
       var currentAction = "clip : walk ";
       bot.setAttribute("animation-mixer",currentAction);
       bot.setAttribute("position","-1.5  0 13.5");   
      DEvideo.play();
    } else {
      DEvideo.pause();
    }  
         
   if (userPositionX >= 5 && userPositionZ>=5 && userPositionZ<=11) {
       var currentAction = "clip : walk ";
       bot.setAttribute("animation-mixer",currentAction);
       bot.setAttribute("position","-1.5  0 18.5");   
      ATVideo.play();
    } else {
      ATVideo.pause();
    }        
  }
});




// Workaround for mobile video
// uses the splash screen button to trigger video play/pause so that the
// video will auto play when the user enters the theater room
const enterButton = document.querySelector('.splash__button')
const splash = document.querySelector('.splash');

enterButton.addEventListener('click', () => {
  video.play();
  video.pause();
  splash.style.display = 'none';
});
