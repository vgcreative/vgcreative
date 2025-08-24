// ========================
// MOBILE MENU TOGGLE
// ========================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Show/hide nav
  menuBtn.classList.toggle("open"); // Animate button
});

// ========================
// REVEAL ON SCROLL
// ========================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - ) {
      el.classList.add("in");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run once on load

// ========================
// WHATSAPP ORDER
// ========================
function sendWhatsAppOrder() {
  const serviceSelect = document.getElementById("serviceSelect");
  const selectedService = serviceSelect.value;

  if (selectedService) {
    const phone = "254727519292"; // your WhatsApp number (international format)
    const message = `Hello VG Creative! I'd like to order: ${selectedService}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  } else {
    alert("Please select a service before ordering.");
  }
}

// ========================
// HERO TITLE ANIMATION
// ========================
const heroTitle = document.getElementById("heroTitle");
if (heroTitle) {
  setTimeout(() => {
    heroTitle.classList.add("glow"); // Add a CSS glow or animation class
  }, 1000);
}
