document.addEventListener('DOMContentLoaded', function () {
   const loginButton = document.getElementById('loginButton');
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const toggleSignUpButton = document.getElementById('toggleSignUp');

    // Function to toggle between Sign In and Sign Up forms
    function toggleForm() {
        if (signInForm && signUpForm) {
            signInForm.style.display = signInForm.style.display === 'none' ? 'block' : 'none';
            signUpForm.style.display = signUpForm.style.display === 'none' ? 'block' : 'none';
        }
    }

    // Initial setup
    if (signUpForm) {
        signUpForm.style.display = 'none'; // Hide the Sign Up form initially
    }

    // Toggle between Sign In and Sign Up forms when button is clicked
    toggleSignUpButton.addEventListener('click', toggleForm);

    // Show the Sign In form when the "Login" button is clicked
    loginButton.addEventListener('click', function () {
        if (signInForm && signUpForm) {
            signInForm.style.display = 'block';
            signUpForm.style.display = 'none';
        }
    });


});
