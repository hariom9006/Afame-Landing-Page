// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close mobile menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// =========================
// DYNAMIC COPYRIGHT YEAR
// =========================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {

        formMessage.textContent = "Please fill in all the fields.";

        return;

    }

    formMessage.textContent =
        "Thank you, " + name + "! Your demo form was submitted successfully.";

    contactForm.reset();

});


// =========================
// BUTTON SCROLL EFFECT
// =========================

const actionButtons = document.querySelectorAll('a[href="#contact"]');

actionButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        console.log("Get Started button clicked!");

    });

});