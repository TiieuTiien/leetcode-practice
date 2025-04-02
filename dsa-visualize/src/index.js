import ArrayStructure from './data-structures/Array.js';
import DragDrop from './drag-drop/drag-drop.js'; // Import the DragDrop class

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  const arrayContainer = document.getElementById("arrayContainer");

  let arrayStructure = new ArrayStructure(30); // Create an instance of the array with 20 elements
  let array = arrayStructure.getArray(); // Get the array from the ArrayStructure class

  // Declare a persistent variable for dragDrop.
  let dragDropInstance;

  // Function to render the array as bars
  function renderArray(arr) {
    arrayContainer.innerHTML = ''; // Clear the previous array content

    arr.forEach((value, index) => {
      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = `${value * 3}px`; // Height of the bar
      bar.style.width = '30px'; // Width of the bar
      bar.style.margin = '0 5px'; // Margin between bars
      bar.style.backgroundColor = 'teal'; // Color of the bar
      bar.dataset.index = index; // Store the index of the array element on the bar
      arrayContainer.appendChild(bar);
    });

    // Create the DragDrop instance only once.
    if (!dragDropInstance) {
      dragDropInstance = new DragDrop(arrayContainer, arr, renderArray);
    }
    else {
      // Update the instance's array reference if needed.
      dragDropInstance.array = arr;
      // Reinitialize drag listeners on the new elements.
      dragDropInstance.enableDragAndDrop();
    }
  }

  renderArray(array); // Initial rendering of the array

  // Event listener for the "Start Sorting" button
  startButton.addEventListener("click", async () => {
    // Pass renderArray as the callback so it gets called after each swap.
    await arrayStructure.bubbleSortAnimated(arrayStructure.getArray(), renderArray);
  });
});
