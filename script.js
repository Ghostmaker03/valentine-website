// script.js
let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");
let questionPage = document.getElementById("questionPage");
let activitiesPage = document.getElementById("activitiesPage");

noBtn.addEventListener("click", function() {
    let noBtnTexts = ["You sure?", "Really sure?", "Think again!", "Give it a chance!", "Last chance!", "you have no choose"];
    let text = noBtnTexts.shift(); // Get the next text
    if(text) {
        noBtn.textContent = text;
    } else {
        noBtn.disabled = true; // Disable button if out of texts
    }
});

yesBtn.addEventListener("click", function() {
    questionPage.style.display = "none";
    activitiesPage.style.display = "block";
    // Transition to activities page or further logic
});

// Add more event listeners and logic for navigating through the pages
