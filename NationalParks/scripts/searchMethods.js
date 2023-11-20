"use strict";

const parkContainer = document.getElementById("parkContainer");
const locationRadioBtn = document.getElementById("locationRadioBtn");
const parkTypeRadioBtn = document.getElementById("parkTypeRadioBtn");
const locationDropdown = document.getElementById("locationDropdown");
const parkTypeDropdown = document.getElementById("parkTypeDropdown");

window.onload = init;

function init() {
    locationRadioBtn.onclick = handleRadioClicked;
    parkTypeRadioBtn.onclick = handleRadioClicked;
    locationDropdown.onchange = dropdownSelection;
    parkTypeDropdown.onchange = dropdownSelection;
};

function handleRadioClicked() {
    clearContainer();

    if (locationRadioBtn.checked) {
        showLocationDropdown();
    }
    else if (parkTypeRadioBtn.checked) {
        showParkTypeDropdown();
    }
};

function showLocationDropdown() {
    locationDropdown.style.display = "block";
    parkTypeDropdown.style.display = "none";

    let defaultOption = document.getElementById("defaultLocationOption");
    defaultOption.innerText = "Select a state";

    for (let state of locationsArray) {
        let option = document.createElement("option");
        option.value = state;
        option.innerText = state;
        locationDropdown.appendChild(option);
    }
    locationDropdown.value = "";
};

function showParkTypeDropdown() {
    parkTypeDropdown.style.display = "block";
    locationDropdown.style.display = "none";

    let defaultOption = document.getElementById("defaultTypeOption");
    defaultOption.innerText = "Select a type of park";
    
    for (let parkType of parkTypesArray) {
        let option = document.createElement("option");
        option.value = parkType;
        option.innerText = parkType;
        parkTypeDropdown.appendChild(option);
    }
    parkTypeDropdown.value = "";
};

function dropdownSelection() {
    clearContainer();

    if (locationRadioBtn.checked) {
        let stateSelection = locationDropdown.value;
        let parksList = filterParksByState(stateSelection);
        parkInfoByStateContainer(parksList);
    }
    else if (parkTypeRadioBtn.checked) {
        let parkTypeSelection = parkTypeDropdown.value;
        let typeList = filterParksByType(parkTypeSelection);
        parkInfoByTypeContainer(typeList);
    }
};

function filterParksByState(state) {
    return nationalParksArray.filter(natPark => natPark.State == state);
};

function filterParksByType(type) {
    return nationalParksArray.filter(natPark => natPark.LocationName.includes(type));
};

function parkInfoByStateContainer(parksList) {
    parksList.forEach(park => {
        let accordionItemDiv = document.createElement("div");
        accordionItemDiv.className = "accordion-item";

        parkContainer.appendChild(accordionItemDiv);

        let accordionHeader = document.createElement("h2");
        accordionHeader.className = "accordion-header";

        accordionItemDiv.appendChild(accordionHeader);

        let btn = document.createElement("button");
        btn.className = "accordion-button collapsed";
        btn.type = "button";
        btn.setAttribute("data-bs-toggle", "collapse");

        let targetId = "flush-collapse-" + park.LocationID;

        btn.setAttribute("data-bs-target", "#" + targetId);
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-controls", targetId);

        let btnTextNode = document.createTextNode(park.LocationName);
        btn.appendChild(btnTextNode);

        accordionHeader.appendChild(btn);

        let flushCollapseDiv = document.createElement("div");
        flushCollapseDiv.id = targetId;
        flushCollapseDiv.className = "accordion-collapse collapse"
        flushCollapseDiv.setAttribute("data-bs-parent", "#parkContainer");

        let accordionBody = document.createElement("div");
        accordionBody.className = "accordion-body";

        let accordionBodyHTML = `
            <p><strong>Location ID:</strong> ${park.LocationID}</p>
            <p><strong>Location Name:</strong> ${park.LocationName}</p>
            <p><strong>Address:</strong> ${park.Address}</p>
            <p><strong>City:</strong> ${park.City}</p>
            <p><strong>State:</strong> ${park.State}</p>
            <p><strong>Zip Code:</strong> ${park.ZipCode}</p>
            <p><strong>Phone:</strong> ${park.Phone}</p>
            <p><strong>Fax:</strong> ${park.Fax}</p>
            <p><strong>Latitude:</strong> ${park.Latitude}</p>
            <p><strong>Longitude:</strong> ${park.Longitude}</p>
            <p><strong>Visit:</strong> <a href=""> ${park.Visit}</a></p>
        `;

        accordionBody.innerHTML = accordionBodyHTML;

        flushCollapseDiv.appendChild(accordionBody);

        accordionItemDiv.appendChild(flushCollapseDiv);
    });
};

function parkInfoByTypeContainer(typeList) {
    typeList.forEach(park => {
        let accordionItemDiv = document.createElement("div");
        accordionItemDiv.className = "accordion-item";

        parkContainer.appendChild(accordionItemDiv);

        let accordionHeader = document.createElement("h2");
        accordionHeader.className = "accordion-header";

        accordionItemDiv.appendChild(accordionHeader);

        let btn = document.createElement("button");
        btn.className = "accordion-button collapsed";
        btn.type = "button";
        btn.setAttribute("data-bs-toggle", "collapse");

        let targetId = "flush-collapse-" + park.LocationID;

        btn.setAttribute("data-bs-target", "#" + targetId);
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-controls", targetId);

        let btnTextNode = document.createTextNode(park.LocationName);
        btn.appendChild(btnTextNode);

        accordionHeader.appendChild(btn);

        let flushCollapseDiv = document.createElement("div");
        flushCollapseDiv.id = targetId;
        flushCollapseDiv.className = "accordion-collapse collapse"
        flushCollapseDiv.setAttribute("data-bs-parent", "#parkContainer");

        let accordionBody = document.createElement("div");
        accordionBody.className = "accordion-body";

        let accordionBodyHTML = `
            <p><strong>Location ID:</strong> ${park.LocationID}</p>
            <p><strong>Location Name:</strong> ${park.LocationName}</p>
            <p><strong>Address:</strong> ${park.Address}</p>
            <p><strong>City:</strong> ${park.City}</p>
            <p><strong>State:</strong> ${park.State}</p>
            <p><strong>Zip Code:</strong> ${park.ZipCode}</p>
            <p><strong>Phone:</strong> ${park.Phone}</p>
            <p><strong>Fax:</strong> ${park.Fax}</p>
            <p><strong>Latitude:</strong> ${park.Latitude}</p>
            <p><strong>Longitude:</strong> ${park.Longitude}</p>
            <p><strong>Visit:</strong> <a href=""> ${park.Visit}</a></p>
        `;

        accordionBody.innerHTML = accordionBodyHTML;

        flushCollapseDiv.appendChild(accordionBody);

        accordionItemDiv.appendChild(flushCollapseDiv);
    });
};

function clearContainer() {
    parkContainer.innerHTML = "";
};