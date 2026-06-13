/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function (e) {
e.preventDefault();

```
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});
```

});

/* ================= SIMPLE SCROLL ANIMATION ================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("show");
}
});
}, {
threshold: 0.15
});

sections.forEach(section => {
section.classList.add("hidden");
observer.observe(section);
});

/* ================= MOBILE NAV TOGGLE ================= */
/* (Basic improvement for small screens if you later add a menu button) */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
if (window.scrollY > 50) {
navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
} else {
navbar.style.boxShadow = "none";
}
});

/* ================= SKILL BAR ANIMATION ================= */

const skillBars = document.querySelectorAll(".progress-fill");

const skillObserver = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.width = entry.target.getAttribute("style").replace("width:", "");
}
});
}, {
threshold: 0.5
});

skillBars.forEach(bar => {
skillObserver.observe(bar);
});
