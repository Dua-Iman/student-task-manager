console.log("Student Task Manager loaded.");

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {

    const searchText = searchInput.value.toLowerCase();

    console.log("Searching for: " + searchText);

});