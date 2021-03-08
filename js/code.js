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

async function toggleNav() {
  if (document.getElementById("sidebar").style.width == "0px") {
    if (window.innerWidth < 768) {
      document.getElementById("sidebar").style.width = "85%";
      document.getElementById("sidebar").style.zIndex = "999";
    } else {
      document.getElementsByClassName('fa-bars')[0].classList.add('colorForce');
      document.getElementById("sidebar").style.width = "25%";
      document.getElementById("main").style.marginLeft = "25%";
      header.style.width = "75%";
    }
  } else {
    document.getElementsByClassName('fa-bars')[0].classList.remove('colorForce');
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    header.style.width = "100%";
    await changeZ();
  }

}

function changeZ(){
  document.getElementById("sidebar").style.zIndex = "0";
}




document.addEventListener("mouseout", mouseOut);
document.addEventListener("click", closePopup);