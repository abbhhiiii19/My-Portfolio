
document.addEventListener("DOMContentLoaded", function() {

    const button = document.getElementById("helloBtn");

    button.addEventListener("click", function() {
        alert("Hello Abhinav! Welcome to my Portfolio!");
    });

});

let name = "Abhinav";
let age = 22;
let course = "BTech CSE";

console.log(name);
console.log(age);
console.log(course);

function welcomeUser() {
    alert("Welcome to Abhinav's Portfolio!");
}

welcomeUser();

const contactButton = document.getElementById("contactBtn");

contactButton.addEventListener("click", function() {
    alert("Thank you for visiting my portfolio! Let's connect.");
});

const themeButton = document.getElementById("themeBtn");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.innerText = "☀️ Light Mode";
    } else {
        themeButton.innerText = "🌙 Dark Mode";
    }

});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.getElementById("formResponse").innerText =
        "Thank you, " + name + "! Your form is ready.";

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    contactForm.reset();

});
