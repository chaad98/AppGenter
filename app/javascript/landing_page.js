document.addEventListener('DOMContentLoaded', function () {
    // Initialize a variable to keep track of the active accordion
    let activeAccordion = null;
  
    // Get all the clickable elements
    const clickableElements = document.querySelectorAll('[data-toggle]');
  
    clickableElements.forEach(function (clickableElement) {
      clickableElement.addEventListener('click', function () {
        // Get the data-toggle target ID
        const targetId = this.getAttribute('data-toggle');
  
        // Get the corresponding additional-text element
        const additionalText = document.getElementById(targetId);
  
        // Check if the clicked additional-text is already active
        const isActive = additionalText.classList.contains('active');
  
        // Hide all additional-text elements
        document.querySelectorAll('.additional-text').forEach(function (element) {
          element.classList.remove('active');
        });
  
        // Reset the icon for all clickable elements
        document.querySelectorAll('[data-toggle] i').forEach(function (icon) {
          icon.classList.remove('fa-caret-up');
          icon.classList.add('fa-caret-down');
        });
  
        // Reset the color for all section2-subchild.inner-one elements
        document.querySelectorAll('.section2-subchild.inner-one').forEach(function (element) {
          element.classList.remove('active');
        });
  
        // Show the clicked additional-text element if it was not active
        if (!isActive) {
          additionalText.classList.add('active');
          // Change the icon to fa-caret-up for the clicked element
          this.querySelector('i').classList.remove('fa-caret-down');
          this.querySelector('i').classList.add('fa-caret-up');
          // Add a class to style the clicked section2-subchild.inner-one element (e.g., for red color)
          this.classList.add('active');
          // Set the active accordion to this element
          activeAccordion = this;
        } else {
          // Clicking the same element again, so hide it
          // Reset the active accordion to null
          activeAccordion = null;
        }
      });
    });
  
    // Close the active accordion if another section2-subchild inner-one is clicked
    document.querySelectorAll('.section2-subchild.inner-one').forEach(function (element) {
      element.addEventListener('click', function () {
        if (activeAccordion && activeAccordion !== this) {
          const targetId = activeAccordion.getAttribute('data-toggle');
          const additionalText = document.getElementById(targetId);
          additionalText.classList.remove('active');
          activeAccordion.querySelector('i').classList.remove('fa-caret-up');
          activeAccordion.querySelector('i').classList.add('fa-caret-down');
          activeAccordion.classList.remove('active'); // Remove the styling class
          activeAccordion = null;
        }
      });
    });
  });
  