let entries = JSON.parse(localStorage.getItem("entries")) || [];
let gridContainer = document.querySelector(".grid-container");

gridContainer.innerHTML = "";

entries.slice(0,5).forEach(function(entry) {
    let entryDiv = document.createElement("div");
    entryDiv.classList.add("grid-item");

    let entryDate = document.createElement("h5");
    entryDate.textContent = entry.date;

    let entryTitle = document.createElement("h2");
    entryTitle.textContent = entry.title;

    let entryContent = document.createElement("p");
    entryContent.textContent = entry.content;
    
    entryDiv.appendChild(entryDate);
    entryDiv.appendChild(entryTitle);
    entryDiv.appendChild(entryContent);
    gridContainer.appendChild(entryDiv);
});