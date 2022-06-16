const textWrapper = document.querySelector("#inputText");
const originalTimer = document.querySelector(".timerDisplay");
const startBtn = document.querySelector("#start");
const retryBtn = document.querySelector("#retry");
const stopBtn = document.querySelector("#stop");
const originalText = document.querySelector("#textType p").innerHTML;
const theTimer=document.querySelector("#timer");
const musics=document.querySelector("#play");
//Debugging is fun you have to be used to it.
const textArea = document.querySelector("#inputText"); 
console.log(textArea);

// set the time array
var timer = [0,0,0, 0];
var interval;
var timeRunning = false;

// addind zeros to the time.
function leadingZero(time){
  if(time <= 9){
    time= "0"+ time;
  }
  return time;
}
// keep the hour minutes seconds running
function realTimer(){
 let originalTime= leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
  theTimer.innerHTML=originalTime;
  timer[3]++;

    timer[0] = Math.floor( (timer[3]/100) / 60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
   
   spellCheck();
}



console.log(originalText.length);
//Accuracy of the text result to be inputted
function spellCheck() {
  let textEntered = textArea.value;
  let originTextMatch = originalText.substring(0, textEntered.length);
//console.log(textEntered.length);

  if (textEntered === originalText) {
    //let textEntered= textArea.value;
    clearInterval(interval);
       textWrapper.style.borderColor = "green";
       musics.pause();
       //This function needs to be called inside the condition
       
       displayParent();
       
       
   } else {
        if (textEntered === originTextMatch) {
          textWrapper.style.borderColor = "#65ccf3";
      } else {
          textWrapper.style.borderColor = "#E95D0F";
      }
  }
  

}

// get the time rolling up
function startTimer(){
  let textEnterdLength = textArea.value.length;
 
  if(textEnterdLength === 0 && !timeRunning){
    timeRunning = true;
    interval = setInterval(realTimer, 100);
    musics.play();
  }
 
 }
//set the value of the time in array
const container = document.querySelector(".background");
console.log(container);
function displayParent(){
  
  const div=document.querySelector(".yes");
  div.innerHTML=`<h1>DURATION </h1>
  <p> Great! You finished at ${theTimer.innerText}</p>`;
  openDown();

  

  //alert(` Great! You finished at ${theTimer.innerText}`);
}


container.addEventListener("click",closeDown);
/**Function to close down **/
function closeDown(){
  container.classList.remove("open");

}
function openDown(){
  container.classList.add("open");
}
//start the function to be inputted


//retry the game to start again
function reset(){
  

  //realTimer = clearInterval(interval);
  clearInterval(interval);
  interval = null;
  timer=[0,0,0,0];
  
  timeRunning = false;
  textArea.value = "";
  //theTimer.innerHTML="00:00:00";
  textWrapper.style.borderColor="grey";
  musics.pause()
realTimer();
  
}

//stop the game to stop the typing game



//add event listener
 textArea.addEventListener("keypress", startTimer, false);
 textArea.addEventListener("keyup", spellCheck, false);
 retryBtn.addEventListener("click", reset, false);
 //stopBtn.addEventListener("click", stopp, false);