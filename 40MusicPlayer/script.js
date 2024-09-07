let allMusic = [
  {
    id: 0,
    name: "Imagine",
    artist: "John Lennon",
    img: "./images/13.webp",
    src: "./audios/13.m4a",
  },
  {
    id: 1,
    name: "Billie Jean",
    artist: "Michael Jackson",
    img: "./images/1.avif",
    src: "./audios/1.m4a",
  },
  {
    id: 2,
    name: "Shape of You",
    artist: "Ed Sheeran",
    img: "./images/2.avif",
    src: "./audios/2.m4a",
  },
  {
    id: 3,
    name: "Bohemian Rhapsody",
    artist: "Queen",
    img: "./images/3.avif",
    src: "./audios/3.m4a",
  },
  {
    id: 4,
    name: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    img: "./images/4.avif",
    src: "./audios/4.m4a",
  },
  {
    id: 5,
    name: "Despacito",
    artist: "Luis Fonsi & Daddy Yankee ft. Justin Bieber",
    img: "./images/5.avif",
    src: "./audios/5.m4a",
  },
  {
    id: 6,
    name: "Shape of My Heart",
    artist: "Sting",
    img: "./images/6.webp",
    src: "./audios/6.m4a",
  },
  {
    id: 7,
    name: "Smooth Criminal",
    artist: "Michael Jackson",
    img: "./images/7.webp",
    src: "./audios/7.m4a",
  },
  {
    id: 8,
    name: "Wonderwall",
    artist: "Oasis",
    img: "./images/8.jpeg",
    src: "./audios/8.m4a",
  },
  {
    id: 9,
    name: "Smells Like Teen Spirit",
    artist: "Nirvana",
    img: "./images/9.webp",
    src: "./audios/9.m4a",
  },
  {
    id: 10,
    name: "Stairway to Heaven",
    artist: "Led Zeppelin",
    img: "./images/10.webp",
    src: "./audios/10.m4a",
  },
  {
    id: 11,
    name: "Hotel California",
    artist: "Eagles",
    img: "./images/11.jpeg",
    src: "./audios/11.m4a",
  },
  {
    id: 12,
    name: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    img: "./images/12.jpeg",
    src: "./audios/12.m4a",
  },
];
const wrapper = document.querySelector(".wrapper");
const musicImg = document.querySelector(".imgArea img");
const musicName = document.querySelector(".songDetails .name");
const musicArtist = document.querySelector(".songDetails .artist");
const mainAudio = document.querySelector(".mainAudio");
const playPouseBtn = document.querySelector(".controls .playPause");
const prevBtn = document.querySelector(".controls #prev");
const nextBtn = document.querySelector(".controls #next");
const progressBar = document.querySelector(".progressBar");
const progressArea = document.querySelector(".progressArea");
const moreMusic = document.querySelector("#moreMusic");
const close = document.querySelector("#close");
const musicList = document.querySelector(".musicList");
let musicIndex = Math.floor(Math.random() * allMusic.length);

// ekranga chiqarish
function loadMusic(index) {
  musicName.innerHTML = allMusic[index].name;
  musicArtist.innerHTML = allMusic[index].artist;
  musicImg.src = allMusic[index].img;
  mainAudio.src = allMusic[index].src;
}

loadMusic(musicIndex);

let isMusicPlay = true;
// btn bosilganda qo'shiqni ijro etish
playPouseBtn.addEventListener("click", () => {
  isMusicPlay = !isMusicPlay;
  isMusicPlay ? pouseMusic() : playMusic();
});

// btn bosilganda ishlaydigan ijro etish uchun ishlatiladigan funksiya
function playMusic() {
  wrapper.classList.add("paused");
  playPouseBtn.querySelector("i").className = "fa fa-pause";
  mainAudio.play();
  isMusicPlay = false;
}
// btn bosilganda ishlaydigan ijro etish to'xtatadigan funksiya
function pouseMusic() {
  wrapper.classList.remove("paused");
  playPouseBtn.querySelector("i").className = "fa fa-play";
  mainAudio.pause();
}

// keyingisiga o'tqazish
function nextMusic() {
  musicIndex++;
  musicIndex > allMusic.length - 1 ? (musicIndex = 0) : musicIndex;
  loadMusic(musicIndex);
  playMusic();
}
// bosilganda keyingisiga o'tqazish uchun
nextBtn.addEventListener("click", () => {
  nextMusic();
});

// oldigisiga o'tqazish uchun
function prevMusic() {
  musicIndex--;
  musicIndex < 0 ? (musicIndex = allMusic.length - 1) : musicIndex;
  loadMusic(musicIndex);
  playMusic();
}

// bosilganda oldigisiga o'tqazish uchun
prevBtn.addEventListener("click", () => {
  prevMusic();
});

// vaqtni boshqarish
mainAudio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  const progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%`;
  let musicCurrentTime = document.querySelector(".current");
  let musicDuration = document.querySelector(".duration");

  mainAudio.addEventListener("loadeddata", () => {
    // musiqani davomiyligini olish uchun
    let audioDuration = mainAudio.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalSec = Math.floor(audioDuration % 60);
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    musicDuration.innerHTML = `${totalMin}:${totalSec}`;
  });
  // musiqani hozirgi nechanchi vaqtda ketayotganini topish uchun
  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if (currentSec < 10) {
    currentSec = `0${currentSec}`;
  }
  musicCurrentTime.innerHTML = `${currentMin}:${currentSec}`;
});

// ixtiyoriy joyidan ijro ettirish uchun
progressArea.addEventListener("click", (e) => {
  let progressWidthvalue = progressArea.clientWidth;
  let clickedOffSetX = e.offsetX;
  let songDuration = mainAudio.duration;

  mainAudio.currentTime = (clickedOffSetX / progressWidthvalue) * songDuration;
  playMusic();
});

// keyingi musiqani to'g'irlash
const repeatBtn = document.querySelector("#repeatList");
let repeat = true;
repeatBtn.addEventListener("click", () => {
  repeat = !repeat;
  if (repeat) {
    repeatBtn.className = "";
    repeatBtn.classList = "fa fa-repeat";
  } else {
    repeatBtn.classList = "fa fa-shuffle";
  }
});
// musiqa tugasa uni qay tartibda qavom ettirish
mainAudio.addEventListener("ended", () => {
  if (repeat) {
    nextMusic();
  } else {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * allMusic.length);
    } while (randomIndex === musicIndex);
  }

  musicIndex = randomIndex;
  loadMusic(musicIndex);
  playMusic();
});

// boshqa musiqalarni ko'rish
moreMusic.addEventListener("click", () => {
  musicList.classList.add("show");
});

close.addEventListener("click", () => {
  musicList.classList.remove("show");
});

const ulTag = document.querySelector(".musicList ul");
for (let i = 0; i < allMusic.length; i++) {
  let li = `<li>
                    <div class="row">
                        <span>${allMusic[i].name}</span>
                        <p>${allMusic[i].artist}</p>
                    </div>
                    <audio src="${allMusic[i].src}" class="music${allMusic[i].id}"></audio>
                    <span class="audioDuration" id="music${allMusic[i].id}">3:40</span>
                </li>`;
  ulTag.insertAdjacentHTML("beforeend", li);

  let liaudioDuration = document.querySelector(`#music${allMusic[i].id}`);
  let liaudio = document.querySelector(`.music${allMusic[i].id}`);

  liaudio.addEventListener("loadeddata", () => {
    let audioDuration = liaudio.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalSec = Math.floor(audioDuration % 60);
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    liaudioDuration.innerHTML = `${totalMin}:${totalSec}`;
  });
}

const allLiTags = document.querySelectorAll(".musicList li");
console.log(allLiTags);
for (let i = 0; i < allLiTags.length; i++) {
  const element = allLiTags[i];
  element.addEventListener("click", () => {
    musicIndex = i;
    loadMusic(musicIndex);
    playMusic();
    musicList.classList.remove("show");
  });
}

// let volume = 0.9
// mainAudio.volume = volume
