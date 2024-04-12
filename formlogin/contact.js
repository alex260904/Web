function submitForm(event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    // Perform form validation (you can add more validation logic as needed)
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

    // Assuming a successful form submission (you may replace this with actual form submission logic)
    // Display thank you message and hide the form
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('thank-you').style.display = 'block';
}
