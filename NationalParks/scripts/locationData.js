"use strict";

const locationsArray = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "DC",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
];

window.onload = function () {
    const locationDropdown = document.getElementById("locationDropdown");

    // Create the function for dropdown and the options it will populate from the array
    function populateDropdown(dropdown, data) {
        dropdown.innerHTML = '<option value="" selected>Select State/Territory</option>';

        // Using forEach method to loop through the location array of states
        data.forEach(item => {
            let option = document.createElement("option");
            option.value = item;
            option.textContent = item;
            dropdown.appendChild(option);
        });
    }

    // Populate the location dropdown
    populateDropdown(locationDropdown, locationsArray);

};
