"use strict";

window.onload = init;

function init() {

    // Declared new variables for radio elements from HTML document
    const locationRadioBtn = document.getElementById("locationRadioBtn");
    const parkTypeRadioBtn = document.getElementById("parkTypeRadioBtn");

    // Declared new variables for dropdown elements from HTML document
    const locationDropdown = document.getElementById("locationDropdown");
    const parkTypeDropdown = document.getElementById("parkTypeDropdown");

    // Set click event handlers to control dropdown options
    locationRadioBtn.onclick = function () {
        locationDropdown.style.display = "block";
        parkTypeDropdown.style.display = "none"; // Hides parkTypeDropdown if locationRadioBtn is checked

        for (let states of locationsArray) {
            let option = document.createElement("option");
            option.innerText = states;
            locationDropdown.appendChild(option);
        }
    };

    parkTypeRadioBtn.onclick = function () {
        parkTypeDropdown.style.display = "block";
        locationDropdown.style.display = "none"; // Hides locationDropdown if parkTypeRadioBtn is checked

        for (let parkTypes of parkTypesArray) {
            let option = document.createElement("option");
            option.innerText = parkTypes;
            parkTypeDropdown.appendChild(option);

        }
    };
};

function populateParkInfo(locationDropdown, parkTypeDropdown) {

    const nationalParkDetails = document.getElementById("nationalParkDetails");
    const locationId = document.getElementById("locationId");
    const locationName = document.getElementById("locationName");
    const locationAddress = document.getElementById("locationAddress");
    const locationCity = document.getElementById("locationCity");
    const locationState = document.getElementById("locationState");
    const locationZipCode = document.getElementById("locationZipCode");
    const locationPhone = document.getElementById("locationPhone");
    const locationFax = document.getElementById("locationFax");
    const locationLatitude = document.getElementById("locationLatitude");
    const locationLongitude = document.getElementById("locationLongitude");
    const locationCoordinates = document.getElementById("locationCoordinates");

    const selectedState = locationDropdown.value;
    const selectedParkType = parkTypeDropdown.value;

    locationDropdown.onchange = function () {
    if (selectedState !== "") {
        let selectedLocation = nationalParksArray.find(park => park.State == selectedState);
        locationId.innerText = selectedLocation.LocationID;
        locationName.innerText = selectedLocation.LocationName;
        locationAddress.innerText = selectedLocation.Address;
        locationCity.innerText = selectedLocation.City;
        locationState.innerText = selectedLocation.State;
        locationZipCode.innerText = selectedLocation.ZipCode;
        locationPhone.innerText = selectedLocation.Phone;
        locationFax.innerText = selectedLocation.Fax;
        locationLatitude.innerText = selectedLocation.Latitude;
        locationLongitude.innerText = selectedLocation.Longitude;
        locationCoordinates.innerText = selectedLocation.Location;

        nationalParkDetails.style.display = "block"
    }
};
    parkTypeDropdown.onchange = function () {

    if (selectedParkType !== "") {
        let selectedType = nationalParksArray.find(park => park.LocationID == selectedParkType);
        locationId.innerText = selectedType.LocationID;
        locationName.innerText = selectedType.LocationName;
        locationAddress.innerText = selectedType.Address;
        locationCity.innerText = selectedType.City;
        locationState.innerText = selectedType.State;
        locationZipCode.innerText = selectedType.ZipCode;
        locationPhone.innerText = selectedType.Phone;
        locationFax.innerText = selectedType.Fax;
        locationLatitude.innerText = selectedType.Latitude;
        locationLongitude.innerText = selectedType.Longitude;
        locationCoordinates.innerText = selectedType.Location;

        nationalParkDetails.style.display = "block"
    }
};

};

