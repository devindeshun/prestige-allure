// When the user scrolls the page, execute stickyNav
window.onscroll = function() {
  stickyNav();
};

// Get the header, popup, and sidebar
let header = document.querySelector("#navbar");
let sidebar = document.getElementById("sidebar");
let popup = document.getElementById("popup");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
let stickyNav = () => window.pageYOffset > sticky ? header.classList.add("sticky") : header.classList.remove("sticky");

function mouseOut(event) {
  if (event.clientY < 20) {
    document.removeEventListener("mouseout", mouseOut);
    popup.style.display = "block";
  }
}

function closePopup() {
  if (popup.style.display == "block") {
    document.removeEventListener("click", closePopup);
    popup.style.display = "none";
  }
}

function toggleNav() {
  if (sidebar.style.width == "0px") {
    if (window.innerWidth < 768) {
      document.querySelector(".closebtn").style.display = "block";
      sidebar.style.paddingTop = 0;
      sidebar.style.width = "85%";
      sidebar.style.zIndex = "999";
    } else {
      document.querySelector('.fa-bars').classList.add('colorForce');
      sidebar.style.width = "25%";
      document.getElementById("main").style.marginLeft = "25%";
      header.style.width = "75%";
    }
  } else {
    document.querySelector('.fa-bars').classList.remove('colorForce', 'colorForceMobile');
    sidebar.style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    header.style.width = "100%";
    sidebar.style.zIndex = "0";
  }

}




document.addEventListener("mouseout", mouseOut);
document.addEventListener("click", closePopup);