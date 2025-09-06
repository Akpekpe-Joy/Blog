const cookieContainer = document.querySelector(".cookie-container");
const acceptBtn = document.querySelector("#acceptBtn");
const declineBtn = document.querySelector("#declineBtn");
const undoBtn = document.querySelector("#undoBtn");

// On page load
window.addEventListener("load", () => {
  const choice = localStorage.getItem("cookieChoice");
  const undoShown = localStorage.getItem("undoShown");

  if (!choice) {
    cookieContainer.classList.add("show");
    undoBtn.style.display = "none"; // no undo until choice
  } else {
    cookieContainer.classList.remove("show");

    //  Show Undo only if it hasn't been shown before
    if (!undoShown) {
      undoBtn.style.display = "block";
    } else {
      undoBtn.style.display = "none";
    }
  }
});

// Accept
acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookieChoice", "accepted");
  cookieContainer.classList.remove("show");
  showUndoOnce();
});

// Decline
declineBtn.addEventListener("click", () => {
  localStorage.setItem("cookieChoice", "declined");
  cookieContainer.classList.remove("show");
  showUndoOnce();
});

// Undo button
undoBtn.addEventListener("click", () => {
  localStorage.removeItem("cookieChoice"); // reset choice
  localStorage.setItem("undoShown", "true"); // mark undo as used
  cookieContainer.classList.add("show");   // show popup again
  undoBtn.style.display = "none";          // hide permanently
});

// Helper: show undo only once
function showUndoOnce() {
  if (!localStorage.getItem("undoShown")) {
    undoBtn.style.display = "block"; // show undo
  }
}
   