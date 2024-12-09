// JavaScript Document
console.log("hi")

document.addEventListener("DOMContentLoaded", function() {
    console.log("hi");
  
    var coll = document.getElementsByClassName("collapsible");
    var i;
  
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  });

  function toggleMenu() {
    const menu = document.querySelector('.side-menu');
    const isOpen = menu.classList.contains('open');
  
    if (isOpen) {
      menu.classList.remove('open');
      menu.setAttribute('aria-hidden', 'true');
    } else {
      menu.classList.add('open');
      menu.setAttribute('aria-hidden', 'false');
    }
  }

//ChatGPT - Back to Top Button. (z.d.). ChatGPT. https://chatgpt.com/share/675729c4-72c8-800e-877c-ffe02f689cca (AANGEPASTE CODE!)
// Show the button when the user scrolls down
window.onscroll = function() {
  var button = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      button.style.display = "block"; // Show the button
  } else {
      button.style.display = "none"; // Hide the button
  }
};

// Play sound and scroll to top when the button is clicked
function scrollToTop() {
  var sound = document.getElementById("buttonSound");
  sound.play(); // Play the sound

  window.scrollTo({ top: 0, behavior: 'smooth' });
}



let cartCount = 0; // Initialize cart count

// Function to add an item to the cart
function addToCart() {
  // Increase the cart count
  cartCount++;

  // Update the cart display inside the <p> element with class 'cart-count'
  let cartCountElement = document.querySelector('.cart-count');
  cartCountElement.textContent = cartCount;

  // No pop-up alert, just update the cart count
}

//ChatGPT - Light Dark Mode Toggle. (z.d.). ChatGPT. https://chatgpt.com/share/675773b6-4890-800e-82ad-423b189a48c6 (AANGEPASTE CODE!)

const toggleButton = document.getElementById('dark');
const body = document.body;

// Load theme from localStorage if available
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggleButton.textContent = 'Light'; // Update button text to match current mode
}

// Add event listener for the button
toggleButton.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    // Switch to light mode
    body.classList.remove('dark');
    toggleButton.textContent = 'Dark'; // Update button text
    localStorage.setItem('theme', 'light'); // Save light mode preference
  } else {
    // Switch to dark mode
    body.classList.add('dark');
    toggleButton.textContent = 'Light'; // Update button text
    localStorage.setItem('theme', 'dark'); // Save dark mode preference
  }
});

//ChatGPT - Increase text size button. (z.d.). ChatGPT. https://chatgpt.com/share/67577428-ecac-800e-a465-f033f602a433 (AANGEPASTE CODE!)

function increaseTextSize() {
  const textElement = document.querySelector('.product-txt');
  const currentSize = parseFloat(window.getComputedStyle(textElement).fontSize); // Get the current font size
  textElement.style.fontSize = (currentSize + 2) + 'px'; // Increase by 2px
}

