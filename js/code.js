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

function openNav() {
  if (window.innerWidth < 768) {
    document.getElementById("sidebar").style.width = "85%";
  } else {
    document.getElementById("sidebar").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
    header.style.width = "75%";
  }
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  header.style.width = "100%";
}

document.addEventListener("mouseout", mouseOut);
document.addEventListener("click", closePopup);