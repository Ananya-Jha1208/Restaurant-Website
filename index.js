// Example code for form validation using JavaScript
document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('exampleInputName1').value;
    const phoneNumber = document.getElementById('exampleInputphoneNumber1').value;

    if (!name || !phoneNumber) {
        alert('Please fill in all fields.');
        event.preventDefault(); // Prevent form submission if fields are empty
    }
    // Additional validation checks can be added as needed
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
