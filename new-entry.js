// Creating variable for the save button using querySelector as specified in Milestone 2
let saveButton = document.querySelector("#save-entry");


//Event listener for logging the title and content when save button is pressed
saveButton.addEventListener("click", function() {
    // Get the title and content of the entry and logging to console as specified in Milestone 2
    let entryTitle = document.querySelector("#entry-title").value;
    let entryContent = document.querySelector("#entry-content").value;

    console.log(entryTitle);
    console.log(entryContent);

    // Save the entry to localStorage, creating the array of entries and object, pushing the new entry to the array and then saving it to localStorage as specified in Milestone 3
    let entries = JSON.parse(localStorage.getItem("entries")) || [];
    const newEntry = {
        title: entryTitle,
        content: entryContent,
        date: new Date().toLocaleDateString() // Adding a date property to the entry object to store the date and time when the entry was created, which can be useful for sorting and displaying entries in the future
    };
    // Adding the new entry to the beginning of the array using unshift so that the most recent entry appears first in the list of entries making code more efficient and easier to read when displaying the entries in the future  
    entries.unshift(newEntry);
    localStorage.setItem("entries", JSON.stringify(entries));

    document.querySelector("#entry-title").value = "";
    document.querySelector("#entry-content").value = "";

    // ADDITIONAL: Alert to confirm that the entry has been saved
});