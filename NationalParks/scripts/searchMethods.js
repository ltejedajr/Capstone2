"use strict";

window.onload = function displayDropdown() {

    // Declared new variables for radio elements from HTML document
    const locationRadioBtn = document.getElementById("locationRadioBtn");
    const parkTypeRadioBtn = document.getElementById("parkTypeRadioBtn");

    // Created radio button event handlers
    locationRadioBtn.onclick = displayDropdown;
    parkTypeRadioBtn.onclick = displayDropdown;

    // Declared new variables for dropdown elements from HTML document
    const locationDropdown = document.getElementById("locationDropdown");
    const parkTypeDropdown = document.getElementById("parkTypeDropdown");

    // Created location radio button action to display location dropdown and hide park type dropdown once checked
    // Created a for loop to go through the location array and display the states in my dropdown
    if (locationRadioBtn.checked) {
        locationDropdown.style.display = "block";
        parkTypeDropdown.style.display = "none"; // Hides parkTypeDropdown if locationRadioBtn is checked

        for (let state of locationsArray) {
            let option = document.createElement("option");
            option.innerText = state;
            locationDropdown.appendChild(option);
        }
    }

    // Created park type radio button action to display park type dropdown and hide location dropdown once checked
    // Created a for loop to go through the park type array and display the park types in my dropdown
    else if (parkTypeRadioBtn.checked) {
        parkTypeDropdown.style.display = "block";
        locationDropdown.style.display = "none"; // Hides locationDropdown if parkTypeRadioBtn is checked

        for (let parkTypes of parkTypesArray) {
            let option = document.createElement("option");
            option.innerText = parkTypes;
            parkTypeDropdown.appendChild(option);

        }
    }
};

