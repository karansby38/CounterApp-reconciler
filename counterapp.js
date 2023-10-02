document.addEventListener("DOMContentLoaded", function() {
  const counterSpan = document.getElementById('counter');
  const incrementButton = document.getElementById('incrementButton');
  const decrementButton = document.getElementById('decrementButton');

  let count = 0;

  // Function to update the counter display
  function updateCounter() {
      counterSpan.textContent = count;
  }

  // Event listener for increment button
  incrementButton.addEventListener('click', () => {
      count++;
      updateCounter(); // Update the counter display
  });

  // Event listener for decrement button
  decrementButton.addEventListener('click', () => {
      if (count > 0) {
          count--;
          updateCounter(); // Update the counter display
      }
  });

  // Initial render
  updateCounter();
});