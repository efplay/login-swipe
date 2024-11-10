// Selecting elements
let switchFrm = document.querySelector('#switch-frm');
let switchF1 = document.querySelector('#switch-f1');
let switchF2 = document.querySelector('#switch-f2');
let switchCircle = document.querySelectorAll('.switch-circle');
let switchBtn = document.querySelectorAll('.switch-btn');
let regFm = document.querySelector('#register-form');
let logFm = document.querySelector('#login-form');
let allButtons = document.querySelectorAll('.submit');
let loadingIndicator = document.querySelector('.loading-indicator');

// Disable standard form submission
let getButtons = (e) => {
    e.preventDefault(); // This will prevent form submission for switching forms
    console.log("Button disabled");
};

// Function for switching the form
let changeForm = (e) => {
    console.log("Form switching");


    // Add animation class for the main form container
    switchFrm.classList.add('is-gx');

    // Remove animation class after a short delay to allow for animation effect
    setTimeout(function () {
        switchFrm.classList.remove('is-gx');
    },700);

    // Toggle the main animation class for form switching and circle movement
    switchFrm.classList.toggle('is-txr');
    switchCircle.forEach(circle => circle.classList.toggle('is-txr'));

    // Toggle the visibility of the forms
    switchF1.classList.toggle('is-hidden');
    switchF2.classList.toggle('is-hidden');
    regFm.classList.toggle('is-txl');
    logFm.classList.toggle('is-txl');
    logFm.classList.toggle('is-z200');

    // Debugging log for the status of forms
    console.log("Entry Form Status:", switchF1.classList.contains('is-hidden') ? "Hidden" : "Visible");
    console.log("Enrollment Form Status:", switchF2.classList.contains('is-hidden') ? "Hidden" : "Visible");
};

// Function to show loading indicator
let showLoading = () => {
    loadingIndicator.style.display = 'block'; // Show loading indicator
};

// Function to hide loading indicator
let hideLoading = () => {
    loadingIndicator.style.display = 'none'; // Hide loading indicator
};

// Main function to add event listeners
let mainF = (e) => {
    // Add click event to all submit buttons to prevent form submission (optional)
    allButtons.forEach(button => button.addEventListener('click', getButtons));

    // Add click event to toggle buttons for form switching
    switchBtn.forEach(button => button.addEventListener('click', changeForm)); 
    
    // Add form submit event handlers to show loading indicator
    regFm.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        showLoading(); // Show loading indicator when submitting the form
        setTimeout(() => hideLoading(), 2000); // Simulate form submission delay and hide indicator after
    });

    logFm.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        showLoading(); // Show loading indicator when submitting the form
        setTimeout(() => hideLoading(), 2000); // Simulate form submission delay and hide indicator after
    });
};  

// Launching the function on page load
window.addEventListener('load', mainF);
