// Get references to the button, the popup div, the overlay, and the close button
const showPopupButton = document.getElementById("showPopupButton");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const closePopupButton = document.getElementById("closePopupButton");

// Function to show the popup and overlay
function showPopup() {
  popup.style.display = "block";
  overlay.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling
}

// Function to hide the popup and overlay
function hidePopup(event) {
  // Check if the click event occurred outside the popup
  if (!popup.contains(event.target) && event.target !== showPopupButton) {
    popup.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = ""; // Re-enable scrolling
  }
}

// Function to hide the popup when the close button is clicked
function closePopup() {
  popup.style.display = "none";
  overlay.style.display = "none";
  document.body.style.overflow = ""; // Re-enable scrolling
}

// Event listener to show the popup when the button is clicked
showPopupButton.addEventListener("click", showPopup);

// Event listener to hide the popup when clicked outside
document.addEventListener("click", hidePopup);

// Event listener to hide the popup when the close button is clicked
closePopupButton.addEventListener("click", closePopup);
