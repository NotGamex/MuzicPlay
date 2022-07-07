console.log("Welcome to MuzicPlay");

//Variables
let songIndex = 0;
let audioElement =  new Audio('assets/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let play1 = document.getElementById('play1');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songname: "Kendi Hundi si", filepath: "assets/1.mp3"},

]
// audioElement..Play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.id.remove('play1');
      masterPlay.id.add('pausem');

  }
  else{
    audioElement.pause();
    masterPlay.id.remove('pausem');
    masterPlay.id.add('play1');
    
}
})

/*
masterPlay.addEventListener('', ()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove('');
      masterPlay.classList.add('');
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('');
    masterPlay.classList.add('');
    
}
})*/

//Listen to Events
audioElement.addEventListener('timeupdate' , ()=>{
  console.log('timeupdate')
  //update Seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
  console.log(progress);
  myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , ()=>{
      audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

/*//// ALERT!
alert("Author's Instagram : not_gamex | Press 'OK' To Continue") ;
*/