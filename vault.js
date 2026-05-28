let entries = JSON.parse(localStorage.getItem("entries")) || [];
let cardContainer = document.querySelector(".card-container");

cardContainer.innerHTML = "";

//Noticed by clearing the card container, the intro card is also cleared. So I need to create it again here.
    let introCard = document.createElement("div");
    introCard.classList.add("intro-card");

    let introTitle = document.createElement("h1");
    introTitle.textContent = "My Vault";

    let introText = document.createElement("p");
    introText.textContent = "A sanctuary for the whispers of the past, preserved in ink and digital shadow. Every word a cornerstone of who you were, and who you are becoming.";

    introCard.appendChild(introTitle);
    introCard.appendChild(introText);
    cardContainer.appendChild(introCard);

entries.forEach(function (entry) {
    // Adding a class to the entry div if the entry is marked as private, so that it can be styled differently in the CSS to visually distinguish private entries from public ones when displayed in the vault.
    if (entry.private) {
    entryDiv.classList.add("private-entry");
}

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