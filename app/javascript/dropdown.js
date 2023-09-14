// Wait for the DOM to fully load
document.addEventListener('turbo:load', function () {
    // Select the dropdown items
    const languageDropdown = document.querySelector('#languageDropdown');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    // Function to handle language selection
    function handleLanguageSelection(event) {
        event.preventDefault();
        const selectedLang = event.target.getAttribute('data-lang');
        // You can perform actions based on the selected language here
        // For example, you can redirect to the corresponding page:
        switch (selectedLang) {
            case 'en':
                Turbo.visit('/en'); // English
                break;
            case 'bm':
                Turbo.visit('/bm'); // Bahasa Malaysia
                break;
            case 'cn':
                Turbo.visit('/cn'); // Chinese
                break;
            default:
                break;
        }
    }

    // Add a click event listener to each dropdown item
    dropdownItems.forEach(item => {
        item.addEventListener('click', handleLanguageSelection);
    });
});
