var typed = new Typed(".multiple-text", {
  strings: ["Fullstack Developer", "Laravel Developer", "Instructor"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Click event: Immediately update active link on click
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Remove active class from all links
    navLinks.forEach((lnk) => lnk.classList.remove("active"));
    // Add active class to the clicked link
    event.target.classList.add("active");
  });
});
// toggle icon navbar//
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};
// Scroll event: Update active link based on the section in view
window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // Update active class on nav links for currently viewed section
      navLinks.forEach((link) => {
        link.classList.remove("active");
        // Ensure the query selector finds an element; if not, no error will be thrown since classList is called on null
        let activeLink = document.querySelector(
          "header nav a[href*=" + id + "]"
        );
        if (activeLink) activeLink.classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  //============== remove toggle icon and navbar when click navbar link (scroll)========//
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
});

// *=========== scroll reveal ==========*//
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home_content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services_container, .portfolio-box, .contact ",
  { origin: "bottom" }
);
ScrollReveal().reveal(" .home_content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(" .home_content p, .about-content", { origin: "right" });
