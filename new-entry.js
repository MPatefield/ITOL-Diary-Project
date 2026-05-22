// Creating variable for the save button using querySelector as specified in Milestone 2
let saveButton = document.querySelector("#save-entry");

// Displaying the current date in the date stamp element using toLocaleDateString to format the date in a more readable way, and specifying the options to include the year, month, day and weekday in the desired format. This will make it easier for users to understand when the entry was created when they view it in the vault.
let dateInput = document.querySelector("#date-stamp");
let today = new Date().toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        }) ;
dateInput.textContent = today.toUpperCase();

//Event listener for logging the title and content when save button is pressed
saveButton.addEventListener("click", function () {
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
        // Using toLocaleDateString to format the date in a more readable way, and specifying the options to include the year, month, day and weekday in the desired format. This will make it easier for users to understand when the entry was created when they view it in the vault.
        date: new Date().toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        }) 
    };
    // Adding the new entry to the beginning of the array using unshift so that the most recent entry appears first in the list of entries making code more efficient and easier to read when displaying the entries in the future  
    entries.unshift(newEntry);
    localStorage.setItem("entries", JSON.stringify(entries));

    document.querySelector("#entry-title").value = "";
    document.querySelector("#entry-content").value = "";

    // Displaying the toast notification when the entry is saved, by selecting the toast element and adding the "show" class to it when the save button is clicked, and then removing the "show" class after 3 seconds to hide the notification.
    let toast = document.querySelector(".toast");
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

});

// Functionality to clear the entry form when the discard button is pressed, using querySelector to select the discard button and adding an event listener to clear the title and content fields when clicked.

let clearEntry = document.querySelector("#discard-btn");
    clearEntry.addEventListener("click", function () {
        document.querySelector("#entry-title").value = "";
        document.querySelector("#entry-content").value = "";
    });