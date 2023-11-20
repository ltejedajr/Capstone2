"use strict";

// Global variables.

const mountainContainer = document.getElementById("mountainContainer");
const mountainDropdown = document.getElementById("mountainDropdown");

window.onload = init;

// This function contains the onchange event handler which in this case
// will have run another function once the user selects an item from the dropdowm menu.

function init() {
    mountainDropdown.onchange = dropdownSelection;
    showMountainDropdown();
};

// This function will generate my mountain dropdown menu by using a for of loop 
// which iterates through the mountainsArray and appending new mountain options 
// everytime it passes through.

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

// This is the function that was mentioned previously. It will find an object in the 
// array that matches the selected option. Declared a variable which contains the value
// from the mountainDropdown. Added a function which can clear any content which exists 
// in the mountainContainer.

function dropdownSelection() {
    clearContainer();

    let mountainSelection = mountainDropdown.value;
    let selectedMountain = mountainsArray.find(mountain => mountain.name === mountainSelection);
    mtInfoContainer(selectedMountain);

};

// This function creates a container for the accordion item and adds all elements to given variable names.
// I chose to display the info as literal strings for easier to read code.

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
  

    // This was a late attempt to change my accordion into cards instead.
    // I required much more knowledge on looping and arrays inside elements.
    // Maybe some other time.

    // function mtInfoContainer(mountain) {

    //     let cardItemDiv = document.createElement("div");
    //     cardItemDiv.className = "card";
    //     cardItemDiv.style.width = "18rem";
    
    //     let cardImage = document.createElement("img");
    //     cardImage.src = "images/" + mountain.img; 
    //     cardImage.className = "card-img-top";
    //     cardImage.alt = mountain.name;
    
    //     let cardBody = document.createElement("div");
    //     cardBody.className = "card-body";
    
    //     let cardTitle = document.createElement("h5");
    //     cardTitle.className = "card-title";
    //     cardTitle.innerText = mountain.name;
    
    //     let cardText = document.createElement("p");
    //     cardText.className = "card-text";
    //     cardText.innerText = mountain.desc;
    
    //     cardBody.appendChild(cardTitle);
    //     cardBody.appendChild(cardText);
    
    //     let listGroup = document.createElement("ul");
    //     listGroup.className = "list-group list-group-flush";
    
    //     for (let item of mountainsArray.name) {
    //         let listItem = document.createElement("li");
    //         listItem.className = "list-group-item";
    //         listItem.innerText = item;
    //         listGroup.appendChild(listItem);
    //     }
    
    //     let secondCardBody = document.createElement("div");
    //     secondCardBody.className = "card-body";
    
    
    //     cardItemDiv.appendChild(cardImage);
    //     cardItemDiv.appendChild(cardBody);
    //     cardItemDiv.appendChild(listGroup);
    //     cardItemDiv.appendChild(secondCardBody);
    
    //     mountainContainer.appendChild(cardItemDiv);
    // }
        

  