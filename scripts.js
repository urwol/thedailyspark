document.addEventListener('DOMContentLoaded', function () {
    // Get the "Home" link
    const homeLink = document.querySelector('nav ul li a[href="index.html"]');

    // Add event listener to navigate to home page when clicked
    homeLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default action (for anchor tag)
        window.location.href = "home.html"; // Navigate to home.html
    });

    // Optional: Scroll to section smoothly when clicking on other anchor links (if you're using anchor links)
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
