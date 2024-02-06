// JavaScript to handle play button functionality
var video = document.getElementById("myVideo");
var playButton = document.getElementById("playButton");

playButton.addEventListener("click", function () {
  togglePlay();
});

function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.innerHTML = "Pause";
    video.loop = true; // Set the loop attribute to true
    playButton.disabled = true; // Disable the play button
    setTimeout(function () {
      playButton.style.transition = "opacity 0.5s ease"; // Add fading transition
      playButton.style.opacity = 0; // Set the opacity to 0
      setTimeout(function () {
        playButton.style.display = "none"; // Hide the button after the transition
      }, 500);
    }, 5000);
  } else {
    video.pause();
    playButton.innerHTML = "Play";
    video.loop = false; // Set the loop attribute to false
  }
}
