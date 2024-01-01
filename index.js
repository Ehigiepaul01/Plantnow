const hamburger = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-list");
hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active")
    navList.classList.toggle("show")
})

// Function to calculate total cost
function calculateTotalCost(seedlings) {
    // Assuming each seedling costs $5 (you can adjust this value)
    const costPerSeedling = 5;
    return seedlings * costPerSeedling;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-content');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevents the form from submitting traditionally
  
      const numberOfSeedlingsInput = document.getElementById('number of Seedlings');
      const numberOfSeedlings = parseInt(numberOfSeedlingsInput.value);
  
      if (!isNaN(numberOfSeedlings)) {
        const totalCost = calculateTotalCost(numberOfSeedlings);
        alert(`Total cost for ${numberOfSeedlings} seedlings: $${totalCost}`);
        // You can display the total cost in any way you prefer (e.g., updating an HTML element)
      } else {
        alert('Please enter a valid number for the number of seedlings.');
      }
    });
  });
  