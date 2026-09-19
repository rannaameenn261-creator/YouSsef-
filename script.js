
const audio = new Audio("../assets/baby-song.mp3");
audio.loop = true;
let ready = false;
audio.addEventListener("canplaythrough", () => ready = true);

document.querySelectorAll(".music-btn").forEach(btn => {
  btn.addEventListener("click", async () => {
    try {
      if (!ready) {
        await audio.play();
        ready = true;
      } else if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
      btn.classList.toggle("playing", !audio.paused);
      btn.textContent = audio.paused ? "♪" : "♫";
    } catch(e) {
      alert("ضيفي الأغنية باسم baby-song.mp3 داخل فولدر assets، وبعدها اضغطي علامة الموسيقى 🎵");
    }
  });
});
