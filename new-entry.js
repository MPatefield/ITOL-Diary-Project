// Creating variable for the save button using querySelector as specified in Milestone 2
let saveButton = document.querySelector("#save-entry");

//Event listener for logging the title and content when save button is pressed
saveButton.addEventListener("click", function() {
    // Get the title and content of the entry and logging to console as specified in Milestone 2
    let entryTitle = document.querySelector("#entry-title").value;
    let entryContent = document.querySelector("#entry-content").value;
    console.log(entryTitle);
    console.log(entryContent);
});