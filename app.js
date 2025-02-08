// for the background
function randomValues() {
  anime({
    targets: ".square, .circle, .triangle",
    translateX: function () {
      return anime.random(-500, 500);
    },
    translateY: function () {
      return anime.random(-300, 300);
    },
    rotate: function () {
      return anime.random(0, 360);
    },
    scale: function () {
      return anime.random(0.2, 2);
    },
    duration: 5000,
    easing: "easeInOutQuad",
    complete: randomValues,
  });
}

randomValues();

console.log("Hello mama");

function getComputerChoice() {
  const r = Math.random();
  if (r < 1 / 3) {
    return "Paper";
  } else if (r < 2 / 3) {
    return "Rock";
  } else {
    return "Scissors";
  }
}
