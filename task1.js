// Button Click Action
document.querySelector(".btn").addEventListener("click", function() {
    alert("✅ Appointment booked! We will contact you soon.");
});

// Greeting Message
const header = document.querySelector("header");
const time = new Date().getHours();

let msg = "";

if (time < 12) msg = "🌅 Good Morning!";
else if (time < 18) msg = "☀️ Good Afternoon!";
else msg = "🌙 Good Evening!";

const greet = document.createElement("p");
greet.innerText = msg;
greet.style.marginTop = "10px";

header.appendChild(greet);
