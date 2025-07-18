
document.getElementById("start").addEventListener("click"  , startWCount);
document.getElementById("stop").addEventListener("click"  , stopping);
document.getElementById("pause").addEventListener("click"  , pausing);


let x;
let counter=0;
let ispaused = false;
let inbreak = false;
// function inputtype(){
// document
function startWCount(){
    if(document.getElementById("work-time").value =="" ||document.getElementById("break-time").value ==""){
        document.getElementById("validation").innerHTML ="make sure to enter both focus and break time";
    }
    else{
        document.getElementById("validation").innerHTML ="";
    if (ispaused == true){
        document.getElementById("start").innerHTML = "start";
    }
    if (inbreak ==false){
    document.getElementById("status").innerHTML ="in work";
    x ??= setInterval(worktimecountdown,1000);
    }
    else {
        document.getElementById("status").innerHTML ="in break";
        x ??= setInterval(breakcountdown,1000);
    }}
}

function worktimecountdown(){
  var workDuration = document.getElementById("work-time").value;
  var wDurationBySec = (parseInt(workDuration) *60)-counter;
  var hours = (Math.floor(wDurationBySec/(60*60))).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  var minutes = (Math.floor((wDurationBySec %(60*60))/60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  var seconds = (Math.floor(wDurationBySec %(60))).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

  document.getElementById("remaining").innerHTML = hours + ":"
  + minutes + ":" + seconds;
  counter= counter+1;
  

  if (wDurationBySec == 0) {
    counter=0;
    inbreak = true;
    clearInterval(x);
    x=null;
    startWCount();
  }

}

function stopping(){
    clearInterval(x);
    counter=0;
    x=null;
    document.getElementById("remaining").innerHTML="00:00:00";
}
function pausing(){
    clearInterval(x);
    x=null;
    document.getElementById("start").innerHTML="resume";
    ispaused = true;
}
function breakcountdown(){
  var breakDuration = document.getElementById("break-time").value;

  var bDurationBySec = (parseInt(breakDuration) *60)-counter;
  var hours = (Math.floor(bDurationBySec/(60*60))).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  var minutes = (Math.floor((bDurationBySec %(60*60))/60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  var seconds = (Math.floor(bDurationBySec %(60))).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

  document.getElementById("remaining").innerHTML = hours + ":"
  + minutes + ":" + seconds;
  counter= counter+1;
  

  if (bDurationBySec == 0) {
    counter=0;
    inbreak = false;
    clearInterval(x);
    x=null;
    startWCount();
}
}