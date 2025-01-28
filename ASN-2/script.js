// Contact Field Logic
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for your message!');
    this.reset();
});

// Back to Top Button Logic
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');

    if (!backToTopButton) {
        console.error("Back to Top button not found in the DOM.");
        return;
    }

    const isNearBottom = () => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolledFromTop = window.scrollY;

        // Show the button when within 150px of the bottom
        return scrolledFromTop >= (scrollableHeight - 150);
    };

    window.addEventListener('scroll', () => {
        if (isNearBottom()) {
            backToTopButton.style.display = 'block';
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.style.display = 'none';
            backToTopButton.classList.remove('show');
        }
    });


    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});


// Initialize Bootstrap Tooltips
document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Light/Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;

    // Check user preference from local storage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        modeToggle.textContent = "Switch to Light Mode";
    } else {
        body.classList.add("light-mode");
        modeToggle.textContent = "Switch to Dark Mode";
    }

    // Toggle theme on button click
    modeToggle.addEventListener("click", function () {
        if (body.classList.contains("light-mode")) {
            body.classList.replace("light-mode", "dark-mode");
            localStorage.setItem("theme", "dark");
            modeToggle.textContent = "Switch to Light Mode";
        } else {
            body.classList.replace("dark-mode", "light-mode");
            localStorage.setItem("theme", "light");
            modeToggle.textContent = "Switch to Dark Mode";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    if (typeof bootstrap !== "undefined") {
        let myCarousel = new bootstrap.Carousel(document.getElementById('projectCarousel'), {
            interval: 3000, // Auto-slide every 3 sec
            pause: "hover",
            wrap: true
        });
    } else {
        console.error("Bootstrap is not loaded!");
    }
});


