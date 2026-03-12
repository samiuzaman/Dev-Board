function randomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}

function completeButtonTask(btnId, heading) {
  const headingText = document.getElementById(heading).innerText;
  console.log("Heading: ", headingText);
  alert("Board Updated Successfully");
  const completeTask = document.getElementById("complete-task");
  completeTask.innerText = parseInt(completeTask.innerText) + 1;
  const pendingTask = document.getElementById("pending-task");
  pendingTask.innerText = parseInt(pendingTask.innerText) - 1;

  const el = document.getElementById(btnId);
  el.setAttribute("disabled", true);
  el.style.backgroundColor = "rgba(55, 81, 253, 0.22)";
  el.style.color = "#FFFFFF";

  // Add message aside section
  const messageContainer = document.getElementById("message-container");
  const div = document.createElement("div");
  div.innerHTML = `
  <p class="text-left bg-[#f4f7ff] [#00303C] p-3 rounded-lg text-sm">You have Complete The Task <span class="font-medium">${headingText}</span> at ${currentTime()}</p>
  `;
  messageContainer.appendChild(div);
  if (pendingTask.innerText <= 0) {
    alert("congratulations!!! You have completed all the current tasks");
  }
}

function currentDate() {
  const date = new Date();
  const week = date.toString().split(" ")[0];
  const todayDate = date.toString().split(" ").slice(1, 4).join(" ");
  return { week, todayDate };
}

function currentTime() {
  const time = new Date().toLocaleTimeString("en-BD");
  return time;
}
