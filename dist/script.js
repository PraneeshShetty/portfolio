const date = document.getElementById('date')
const setCurrentYear = () => {
	const currentYear = new Date().getFullYear()
	date.textContent = currentYear
}
setCurrentYear()

// hamburger menu
const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
const socials = document.querySelector('.social-nav')
const navLinks = document.querySelectorAll('.nav-links')

const toggleMobileMenu = () => {
	hamburger.classList.toggle('open')
	navList.classList.toggle('open')
	socials.classList.toggle('open')
	document.body.classList.toggle('open')
}

navLinks.forEach(link => link.addEventListener('click', toggleMobileMenu))
hamburger.addEventListener('click', toggleMobileMenu)

// initialize aos (library for scroll animation)
AOS.init()
// JavaScript for Pop-Up Form
document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.querySelector(".mail-link");
    const popup = document.getElementById("contactFormPopup");
    const closeBtn = document.querySelector(".close-btn");
    const contactForm = document.getElementById("contactForm");

    // Open Pop-Up
    contactLink.addEventListener("click", function (e) {
        e.preventDefault();
        popup.style.display = "flex";
    });

    // Close Pop-Up
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close Pop-Up when clicking outside
    window.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });

    // Handle Form Submission
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

        // Send Email (using a mailto link)
        const mailtoLink = `mailto:praneeshshetty2005@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(message)}`;

        // Open the email client with the pre-filled email
        window.location.href = mailtoLink;

        // Clear the form fields
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";

        // Close the pop-up form
        popup.style.display = "none";
    });
});
// Update the existing skills section JavaScript code
