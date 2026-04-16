// 🌟 Smooth Scroll for Navigation (if you add menu later)
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


// 🌟 Scroll Animation for Sections
const sections = document.querySelectorAll("section");

function revealSections() {
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        } else {
            section.style.opacity = "0";
            section.style.transform = "translateY(40px)";
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();


// 🌟 CTA Click → Simulated Booking Message
const ctas = document.querySelectorAll(".cta");

ctas.forEach(cta => {
    cta.addEventListener("click", () => {
        alert("✅ Appointment request received! Our clinic will contact you shortly.");
    });
});


// 🌟 Dynamic Greeting for Visitors
const header = document.querySelector("header");

const hour = new Date().getHours();
let message = "";

if (hour < 12) {
    message = "🌅 Good Morning! Take care of your skin today.";
} else if (hour < 18) {
    message = "☀️ Good Afternoon! Your skin deserves the best care.";
} else {
    message = "🌙 Good Evening! Relax and rejuvenate your skin.";
}

const greeting = document.createElement("p");
greeting.textContent = message;
greeting.style.marginTop = "10px";
greeting.style.fontWeight = "bold";

header.appendChild(greeting);


// 🌟 Highlight Services on Hover (Interactive Feel)
const services = document.querySelectorAll("h3");

services.forEach(service => {
    service.addEventListener("mouseover", () => {
        service.style.color = "#4a90e2";
        service.style.cursor = "pointer";
    });

    service.addEventListener("mouseout", () => {
        service.style.color = "#34495e";
    });
});


// 🌟 Console Branding
console.log("💙 GlowCare Skin Clinic Website Loaded Successfully!");
