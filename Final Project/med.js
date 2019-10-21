const app = () => {
    const song = document.querySelector(".song"); 
    const play = document.querySelector('.play');
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector(".default-vid");


    //Sounds
    const sounds = document.querySelectorAll(".sound-selection button");

    // Time Display
    const timeDisplay = document.querySelector('.time-display');
    const timeSelect = document.querySelectorAll('.time-section button')

    // Length outline 

    const outlineLength = outline.getTotalLength();
  

    //Duration

    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    // pick different sounds 
    sounds.forEach(sound=>{
        sound.addEventListener('click',function(){
            song.src = this.getAttribute('data-sound');
            video.src = this.getAttribute('data-video');
            checkPlaying(song);
        })
    })

    //play sound

play.addEventListener("click", () => {
   checkPlaying(song);
});

//Select Sound 
timeSelect.forEach(option => {
    option.addEventListener('click', function(){
        fakeDuration = this.getAttribute('data-time');
        timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`
    });
});
// Create a function to stop and play sounds
let checkPlaying = song => {
    if(song.paused){
        song.play();
        video.play; 
        play.src = './img2/pause.svg'; 

    }else{
        song.pause();
        video.pause;
        play.src = './img2/play.svg'; 
    }
}

song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60); 
    let minutes = Math.floor(elapsed / 60); 

// Animate the circle
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress; 

    //Animate the text
    timeDisplay.textContent = `${minutes}:${seconds}`;

    if(currentTime >= fakeDuration){
        song.pause();
        song.currentTime = 0;
        play.src="./img2/play.svg";
        video.pause();
        }
    };
};

app();