// initilized
let songIndex = 0;
let audioElement = new Audio(`songs/${songIndex + 1}.mp3`);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let newSongPlay = Array.from(document.getElementsByClassName('newSongPlay'));
let songPlayName = document.getElementById('songPlayName');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
// let timeStamp=document.getElementById('timeStamp');

let songs = [
    { songName: "Let Me Down Slowly x Main Dhoondne", songPath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Oviman অভিমান ", songPath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Tera Nasha Nasha", songPath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Pasoori • Coke Studio", songPath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Kehndi Hundi Si", songPath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Avijog অভিযোগ ", songPath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Benche Thakar Gaan (বেঁচে থাকার গান)", songPath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Kano roder moto hasle na", songPath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Hoyto Tomari Janya Miftah Zaman ", songPath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "O Re Piya ", songPath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]


//playsong
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//add song info
songItem.forEach((element, i) => {
    console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
    // audioNew = new Audio(`songs/${i+1}.mp3`);
    // audioDuration = audioNew.duration;
    // timeStamp.innerHTML = audioDuration;
})


//progress bar time update
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


const makeAllPlay = () => {
    newSongPlay.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play')
    })
}


newSongPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        console.log(audioElement.duration);
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        songPlayName.innerHTML = songs[songIndex - 1].songName;
    })
})


next.addEventListener('click', () => {
    if(songIndex>=10){
        songIndex=1;
    }
    else{
        songIndex += 1;
    }
   
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    songPlayName.innerHTML = songs[songIndex - 1].songName;
})

previous.addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=10;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    songPlayName.innerHTML = songs[songIndex - 1].songName;
})