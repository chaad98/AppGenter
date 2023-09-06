document.addEventListener('DOMContentLoaded', function () {
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

          // Change the icon class to toggle between caret-up and caret-down
          const iconElement = this.querySelector('i');
          if (isActive) {
              iconElement.classList.remove('fa-caret-up');
              iconElement.classList.add('fa-caret-down');
          } else {
              iconElement.classList.remove('fa-caret-down');
              iconElement.classList.add('fa-caret-up');
          }

          // Show the clicked additional-text element if it was not active, otherwise hide it
          if (!isActive) {
              additionalText.classList.add('active');
              // Reset the color of all section2-subchild.inner-one elements to black
              document.querySelectorAll('.section2-subchild.inner-one').forEach(function (element) {
                  element.classList.remove('active');
              });
              // Change the color of the clicked section2-subchild.inner-one element to red
              this.classList.add('active');
          } else {
              // Clicking the same element again, so hide it
              additionalText.classList.remove('active');
              // Reset the color of the section2-subchild.inner-one element to black
              this.classList.remove('active');
          }
      });
  });
});
