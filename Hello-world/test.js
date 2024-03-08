const searchInput = document.getElementById("searchInput");
const dropdown = document.getElementById("dropdown");
const selectedOptions = document.getElementById("selectedOptions");
const selectedValuesInput = document.getElementById("selectedValues");
const selectedValues = [];
let timeout;
searchInput.addEventListener("input", function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        const searchValue = searchInput.value;
        
        // Simulate an API call with a delay
        fetch(`https://subscriptionreportdevwebapi.azurewebsites.net/api/ADUser/api/SearchADusers?searchTerm=${searchValue}`)
            .then(response => response.json())
            .then(data => {
                // Clear the dropdown
                dropdown.innerHTML = "";
                
                // Populate the dropdown with results
                data.forEach(item => {
                    const option = document.createElement("div");
                    option.className = "dropdown-option";
                    option.textContent = item.emailId;
                    option.addEventListener("click", function() {
                        // Toggle selection
                        if (selectedValues.includes(item.emailId)) {
                            const index = selectedValues.indexOf(item.emailId);
                            selectedValues.splice(index, 1);
                            option.classList.remove("selected");
                            selectedOptions.removeChild(option);
                        } else {
                            selectedValues.push(item.emailId);
                            option.classList.add("selected");
                            const selectedOption = document.createElement("span");
                            selectedOption.textContent = item.displayName;
                            selectedOption.className = "selected-item";
                            selectedOptions.appendChild(selectedOption);
                        }

                        // Update hidden input with selected values
                        selectedValuesInput.value = selectedValues.join(",");
                    });
                    dropdown.appendChild(option);
                });

                // Show the dropdown
                dropdown.style.display = "block";
            })
            .catch(error => {
                console.error("API Error:", error);
            });
    }, 500); // Delay before making the API call (adjust as needed)
});

// Hide the dropdown when clicking outside
document.addEventListener("click", function(event) {
    if (event.target !== searchInput) {
        dropdown.style.display = "none";
    }
});
