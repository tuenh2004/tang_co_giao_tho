var source = "./mp3/mp3.mp3";
var source2 = "./mp3/mp32.mp3";
var audio = document.createElement("audio");
var audio2 = document.createElement("audio");
var bth = document.querySelector("#main");
var btn = document.querySelector(".message");
audio.load();
audio.addEventListener(
  "load",
  function () {
    audio.play();
    audio2.pause();
  },
  true
);
audio.autoplay = true;
audio2.load();
audio2.addEventListener(
  "load",
  function () {
    audio2.play();
    audio.pause();
  },
  true
);
audio.src = source;
audio2.src = source2;

bth.addEventListener(
  "click",
  function () {
    audio.play();
    audio2.pause();
    audio.autoplay = true;
    audio2.autoplay = false;
  },
  true
);
btn.addEventListener(
  "click",
  function () {
    audio2.play();
    audio.pause();
    audio2.autoplay = true;
    audio.autoplay = false;
  },
  true
);
