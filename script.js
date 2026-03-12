// Set Random Background Color
document
  .getElementById("random-color-btn")
  .addEventListener("click", function () {
    document.getElementById("body").style.backgroundColor = randomColor();
  });
