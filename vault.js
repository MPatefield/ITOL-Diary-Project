let entries = JSON.parse(localStorage.getItem("entries")) || [];
let cardContainer = document.querySelector(".card-container");

cardContainer.innerHTML = "";

entries.forEach(function(entry) {
    let entryDiv = document.createElement("div");
    entryDiv.classList.add("input-card");

    let entryDate = document.createElement("p");
    entryDate.textContent = entry.date;
    entryDate.classList.add("date-stamp");

    let entryTitle = document.createElement("h2");
    entryTitle.textContent = entry.title;

    let entryContent = document.createElement("p");
    entryContent.textContent = entry.content;
    
    entryDiv.appendChild(entryDate);
    entryDiv.appendChild(entryTitle);
    entryDiv.appendChild(entryContent);
    cardContainer.appendChild(entryDiv);
});