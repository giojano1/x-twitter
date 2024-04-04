// user pop up

// Get the div element and the popup
var userDiv = document.getElementById("sidebarUser");
var userPopup = document.getElementById("userPopup");

// Function to toggle the popup display
function togglePopup() {
  if (userPopup.style.display === "block") {
    userPopup.style.display = "none";
  } else {
    userPopup.style.display = "block";
    // Set position on top of the div
  }
}

// Event listener to toggle popup on div click
userDiv.addEventListener("click", togglePopup);
