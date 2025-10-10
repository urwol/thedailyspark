document.addEventListener('DOMContentLoaded', function () {
    // Highlight active navigation link
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Function to remove "active" class from all nav links
    function removeActiveClasses() {
        navLinks.forEach(link => link.classList.remove('active'));
    }

    // Add event listener for each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            removeActiveClasses();
            e.target.classList.add('active');
        });
    });

    // Scroll to section smoothly (in case you want custom scroll)
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

    // Optional: Highlight the nav link when the user scrolls to the corresponding section
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                removeActiveClasses();
                link.classList.add('active');
            }
        });
    });
});
