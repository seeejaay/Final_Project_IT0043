const hamburger = document.querySelector(".hamburger");
const navGroup = document.querySelector(".nav-group");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navGroup.classList.toggle("active");
  console.log("Hamburger is activated");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navGroup.classList.remove("active");
    console.log("Hamburger deactivated");
  })
);

function openHome() {
  let openH = window.open("index.html", "_self");
  console.log("Opened Home: " + openH);
}

function openAbout() {
  let openA = window.open("about.html", "_self");
  console.log("Opened About: " + openA);
}

function openGallert() {
  let openG = window.open("gallery.html", "_self");
  console.log("Opened Gallery: " + openG);
}

function openProjects() {
  let openP = window.open("projects.html", "_self");
  console.log("Opened Projects: " + openP);
}

function openContact() {
  let openC = window.open("contact.html", "_self");
  console.log("Opened Contacts: " + openC);
}
