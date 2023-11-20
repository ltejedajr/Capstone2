"use strict";

const mountainContainer = document.getElementById("mountainContainer");
const mountainDropdown = document.getElementById("mountainDropdown");

window.onload = init;

function init() {
    mountainDropdown.onchange = dropdownSelection;
    showMountainDropdown();
};

function showMountainDropdown() {
    let defaultOption = document.getElementById("defaultMountainOption");
    defaultOption.innerText = "Select a mountain";

    for (let mountain of mountainsArray) {
        let option = document.createElement("option");
        option.value = mountain.name;
        option.text = mountain.name;
        mountainDropdown.appendChild(option);
    }

    mountainDropdown.value = "";
};

function dropdownSelection() {
    clearContainer();

    let mountainSelection = mountainDropdown.value;
    let selectedMountain = mountainsArray.find(mountain => mountain.name === mountainSelection);
    mtInfoContainer(selectedMountain);

};

function mtInfoContainer(mountain) {

        let accordionItemDiv = document.createElement("div");
        accordionItemDiv.className = "accordion-item";

        mountainContainer.appendChild(accordionItemDiv);

        let accordionHeader = document.createElement("h2");
        accordionHeader.className = "accordion-header";

        accordionItemDiv.appendChild(accordionHeader);

        let btn = document.createElement("button");
        btn.className = "accordion-button";
        btn.type = "button";
        btn.setAttribute("data-bs-toggle", "collapse");
        btn.setAttribute("data-bs-target",  "#collapse-");

        let btnTextNode = document.createTextNode(mountain.name);
        btn.appendChild(btnTextNode);

        accordionHeader.appendChild(btn);

        let flushCollapseDiv = document.createElement("div");
        flushCollapseDiv.id = "collapse-";
        flushCollapseDiv.className = "accordion-collapse collapse"

        let accordionBody = document.createElement("div");
        accordionBody.className = "accordion-body";

        let accordionBodyHTML = `
            <p><strong>Mt. Name</strong> ${mountain.name}</p>
            <p><strong>Mt. Elevation:</strong> ${mountain.elevation}</p>
            <img src="images/${mountain.img}" style="max-width: 100%; border: 10px">
            <p><strong>Description:</strong> ${mountain.desc}</p>
            <p><strong>Coordinates:</strong> ${mountain.coords.lat}, ${mountain.coords.lng}</p>
        `;

        accordionBody.innerHTML = accordionBodyHTML;

        flushCollapseDiv.appendChild(accordionBody);

        accordionItemDiv.appendChild(flushCollapseDiv);
    };

    function clearContainer() {
        mountainContainer.innerHTML = "";
    };
  