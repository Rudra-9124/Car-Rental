// let navbar = document.getElementsByClassName('navbar')[0];
// let menu = document.getElementById('menu-icon');

// menu.onclick = () => {
//   menu.classList.toggle('bx-x');
//   navbar.classList.toggle('active');
// }
// windows.onscroll = () => {
//   menu.classList.remove('bx-x');
//   navbar.classList.remove('active');
// }

const sr = ScrollReveal ({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})
sr.reveal('.text',{delay: 200, origin: 'top'})
sr.reveal('.form-container form',{delay: 800, origin: 'left'})
sr.reveal('.heading',{delay: 600, origin: 'top'})
sr.reveal('.ride-container .box',{delay: 300, origin: 'top'})
sr.reveal('.services-container .box',{delay: 300, origin: 'top'})
sr.reveal('.about-conatiner',{delay: 300, origin: 'top'})
sr.reveal('.review-container',{delay: 300, origin: 'top'})
sr.reveal('.newsletter .box',{delay: 400, origin: 'bottom'})

// Get the modal
var modal = document.getElementById("signIn");
var home = document.getElementById("home");
var nav = document.getElementById("nav");
// Get the button that opens the modal
var btn = document.getElementById("sign");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == home || event.target == nav) {
    modal.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit");

    // Add click event listener to the submit button
    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Check if location and dates are filled
        const locationInput = document.querySelector('input[name="location"]');
        const pickupDateInput = document.querySelector('input[name="pickup-date"]');
        const returnDateInput = document.querySelector('input[name="return-date"]');
        
        if (locationInput.value.trim() !== '' && pickupDateInput.value.trim() !== '' && returnDateInput.value.trim() !== '') {
            // Scroll to the services section smoothly
            document.querySelector('#services').scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            alert("Please fill in all required fields."); // Alert user to fill in required fields
        }
    });
});

// Function to open the pop-up
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

// Function to close the pop-up
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
  const rentButtons = document.querySelectorAll('.button');

  // Add click event listener to all "Rent Now" buttons
  rentButtons.forEach(function(button) {
      button.addEventListener("click", function(event) {
          event.preventDefault(); // Prevent default button behavior
          openPopup(); // Open the pop-up
      });
  });

  // Add submit event listener to the pop-up form
  document.getElementById("popup-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission behavior
      // Here, you can handle form submission, for example, by collecting the form data
      const formData = new FormData(this);
      const name = formData.get("name");
      const email = formData.get("email");
      const paymentMethod = formData.get("payment");
      // You can then proceed to use this data (e.g., send it to a server, process it, etc.)
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Payment Method:", paymentMethod);
      // After processing, you may close the pop-up
      closePopup();
  });
});
