document.querySelectorAll(".track").forEach(track => {
  let slide = track.querySelector(".slide");
  let clone = slide.cloneNode(true);
  track.appendChild(clone);
});