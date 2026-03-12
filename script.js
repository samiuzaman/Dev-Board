// Date System Start
const dateSection = document.getElementById("date-section");
const p = document.createElement("p");
p.innerHTML = `
  <span>${currentDate().week}, </span> <br> <span class="text-md font-medium">${currentDate().todayDate}</span></p>
`;
dateSection.appendChild(p);
// Date System End

// Set Random Background Color
document
  .getElementById("random-color-btn")
  .addEventListener("click", function () {
    document.getElementById("body").style.backgroundColor = randomColor();
  });

// Complete Button Task -1
document
  .getElementById("complete-btn-one")
  .addEventListener("click", function () {
    completeButtonTask("complete-btn-one", "complete-heading-one");
  });

// Complete Button Task -2
document
  .getElementById("complete-btn-two")
  .addEventListener("click", function () {
    completeButtonTask("complete-btn-two", "complete-heading-two");
  });

// Complete Button Task - 3
document
  .getElementById("complete-btn-three")
  .addEventListener("click", function () {
    completeButtonTask("complete-btn-three", "complete-heading-three");
  });

// Complete Button Task -4
document
  .getElementById("complete-btn-four")
  .addEventListener("click", function () {
    completeButtonTask("complete-btn-four", "complete-heading-four");
  });

// Complete Button Task - 5
document
  .getElementById("complete-btn-five")
  .addEventListener("click", function () {
    completeButtonTask("complete-btn-five", "complete-heading-five");
  });

// Complete Button Task -6
document
  .getElementById("complete-btn-six")
  .addEventListener("click", function () {
    completeButtonTask("complete-btn-six", "complete-heading-six");
  });


