document.addEventListener("DOMContentLoaded", function () {

    const languageButton = document.querySelector(".language-button");
    const languageList = document.querySelector(".language-list");

    // Toggle the language dropdown when the "Language" button is clicked
    languageButton.addEventListener("click", function (event) {
        // Prevent the click event from propagating to the document
        event.stopPropagation();
        languageList.style.display = languageList.style.display === "block" ? "none" : "block";
    });

    // Close the language list when clicking anywhere on the document
    document.addEventListener("click", function (event) {
        if (languageList.style.display === "block" && event.target !== languageButton && !languageList.contains(event.target)) {
            languageList.style.display = "none";
        }
    });
});