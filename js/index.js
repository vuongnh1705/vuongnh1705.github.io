const audioLinks = [
  './audio/Da-Vu.mp3',
  './audio/GapNhauBenNhauLaYTroi-Wind.mp3',
  './audio/Bong-Hoa-Chang-Thuoc-Ve-Ta-Wind-Remix-Nhu-Viet-Deus.mp3',
  './audio/CaoOc20-BRayDatGMasewKICM.mp3',
  './audio/Cho-Qua-Lau.mp3',
  './audio/The-Nights.mp3',
];
const onShowCV = () => {
  alert('Chưa rảnh để làm 😌');
};
const initAudio = () => {
  var audio = document.getElementById('audio');
  var source = document.getElementById('audioSource');
  source.src = audioLinks[Math.floor(Math.random() * audioLinks.length)];

  audio.muted = false;
  audio.autoplay = true;
  audio.load();
  audio.play();
};

window.onload = () => {
  initAudio();
};
