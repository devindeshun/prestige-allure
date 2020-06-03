// When the user scrolls the page, execute stickyNav
window.onscroll = function() {
  stickyNav();
};

// Get the header
let header = document.querySelector("#navbar");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
let stickyNav = () => window.pageYOffset > sticky ? header.classList.add("sticky") : header.classList.remove("sticky");

function mouseOut(event) {
  if (event.clientY < 20) {
    document.removeEventListener("mouseout", mouseOut);
    document.getElementById("popup").style.display = "block";
  }
}

function closePopup() {
  if (document.getElementById("popup").style.display == "block") {
    document.removeEventListener("click", closePopup);
    document.getElementById("popup").style.display = "none";
  }
}

document.addEventListener("mouseout", mouseOut);
document.addEventListener("click", closePopup);