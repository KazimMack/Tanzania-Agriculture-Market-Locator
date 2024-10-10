// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    let name = document.querySelector('input[name="name"]');
    let email = document.querySelector('input[name="email"]');
    let message = document.querySelector('textarea[name="message"]');

    if (!name.value || !email.value || !message.value) {
        e.preventDefault(); // Prevent form submission
        alert('All fields are required!');
    } else if (!validateEmail(email.value)) {
        e.preventDefault(); // Prevent form submission
        alert('Please enter a valid email address!');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Show spinner on form submission
document.querySelector('form').addEventListener('submit', function () {
    document.getElementById('loading-spinner').style.display = 'block';
});


// Dark Mode Toggle
const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Apply saved dark mode on page load
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});

document.getElementById('search').addEventListener('input', function() {
    let searchValue = this.value.toLowerCase();
    let farmers = document.getElementsByClassName('farmer-item');
    
    Array.from(farmers).forEach(function(farmer) {
        let farmerName = farmer.querySelector('h3').textContent.toLowerCase();
        let product = farmer.querySelector('p:nth-of-type(2)').textContent.toLowerCase();
        let location = farmer.querySelector('p:nth-of-type(1)').textContent.toLowerCase();

        if (farmerName.includes(searchValue) || product.includes(searchValue) || location.includes(searchValue)) {
            farmer.style.display = "block";
        } else {
            farmer.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll('.section');
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
});

