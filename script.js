 console.log("welcome to Spotify");

 //initialize variables
 let songIndex=0;
 let audioElement= new Audio('Songs/1.mp3');
 let masterPlay=document.getElementById('masterPlay');
 let myProgressBar=document.getElementById('myProgressBar');
 let gif=document.getElementById('gif');
 let SongName=document.getElementById("SongName");
 let songItems=Array.from(document.getElementsByClassName("songItem"));
 let songs=[
     {SongName:"Na Roja Nuvve" , filePath:"Songs/1.mp3",coverPath:"covers/cover1.jpg"},
     {SongName:"Hukum Tiger ka hukum" , filePath:"Songs/2.mp3",coverPath:"covers/cover2.jpg"},
     {SongName:"Ticketeh konakkunda" , filePath:"Songs/3.mp3",coverPath:"covers/cover3.jpg"},
     {SongName:"Suttam la Sutti Pokala" , filePath:"Songs/4.mp3",coverPath:"covers/cover4.jpg"},
     {SongName:"choosthu choosthune" , filePath:"Songs/5.mp3",coverPath:"covers/cover5.jpg"},
     {SongName:"My Dear Markandeya" , filePath:"Songs/6.mp3",coverPath:"covers/cover6.jpg"}
 ]
 songItems.forEach((element,i)=>{
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText=songs[i].SongName;

 })
 //audioElement.play();
 //handle play/pause click
masterPlay.addEventListener('click',()=>{
     if(audioElement.paused || audioElement.currentTime <= 0){
         audioElement.play();
         masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-pause');
         gif.style.opacity=1;
     }
     else{
         audioElement.pause();
        masterPlay.classList.remove("fa-pause");
       masterPlay.classList.add("fa-circle-play");
       gif.style.opacity=0;
    }
})
 //listen to event
 audioElement.addEventListener('timeupdate',()=>{
     console.log('timeupdate');
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value=progress;
     //update seekbar

 })
 myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
 })
 const makeAllPlays=() => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-circle-play');
    })

 }
 Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=> {
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        console.log(e.target);
       e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause');
        audioElement.src=`Songs/${songIndex}.mp3`;
        SongName.innerText= songs[songIndex-1].SongName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
       masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');

    })
 })
 document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>5){
        songIndex=1
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`Songs/${songIndex}.mp3`;
    SongName.innerText=songs[songIndex-1].SongName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');


 })
 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=1
    }
    else{
        songIndex-= 1;
    }
    audioElement.src=`Songs/${songIndex}.mp3`;
    SongName.innerText=songs[songIndex-1].SongName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');


 })
 /*console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs = [
    { SongName: "Na Roja Nuvve", filePath: "1.mp3", coverPath: "cover1.jpg" },
];

function playSong() {
    audioElement.src = songs[songIndex].filePath;
    audioElement.load();
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity = 1;
}

function pauseSong() {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
}

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        playSong();
    } else {
        pauseSong();
    }
});

audioElement.addEventListener('timeupdate', () => {

});

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    playSong();
}

function previousSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    playSong();
}


function progress(){
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value=progress;
}
playSong();*/