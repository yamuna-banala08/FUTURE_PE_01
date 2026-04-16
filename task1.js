// 🌟 Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// 🌟 Reveal Sections on Scroll (Animation)
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        } else {
            section.style.opacity = "0";
            section.style.transform = "translateY(50px)";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

// Initial call
revealOnScroll();


// 🌟 Simple CTA Alert (Booking Action)
const ctaButtons = document.querySelectorAll(".cta");

ctaButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Thank you! Our team will contact you shortly.");
    });
});


// 🌟 Dynamic Greeting Based on Time
const header = document.querySelector("header");

const hours = new Date().getHours();
let greeting = "";

if (hours < 12) {
    greeting = "Good Morning!";
} else if (hours < 18) {
    greeting = "Good Afternoon!";
} else {
    greeting = "Good Evening!";
}

const greetElement = document.createElement("p");
greetElement.textContent = greeting;
greetElement.style.marginTop = "10px";
greetElement.style.fontWeight = "bold";

header.appendChild(greetElement);


// 🌟 Console Branding (for developers 😎)
console.log("🚀 AI Website Copy Generator Loaded Successfully!");
