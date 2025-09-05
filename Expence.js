


// Get elements from the DOM
const categoryInput = document.getElementById("Categary-section");
const amountInput = document.getElementById("Amount-section");
const dateInput = document.getElementById("Date-section");
const addButton = document.getElementById("Add-btn");
const tableBody = document.getElementById("Expence-body");
const totalAmountCell = document.getElementById("Total-amount");

let total = 0;

// Add button click handler
addButton.addEventListener("click", () => {
    const category = categoryInput.value;
    const amount = parseFloat(amountInput.value);
    const date = dateInput.value;

    if (!category || isNaN(amount) || amount <= 0 || !date) {
        alert("Please fill all fields correctly.");
        return;
    }

    // Create a new table row
    const row = tableBody.insertRow();
    row.insertCell().textContent = category;
    row.insertCell().textContent = amount.toFixed(2);
    row.insertCell().textContent = date;

    // Create Delete button
    const deleteCell = row.insertCell();
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";
    deleteButton.addEventListener("click", () => {
        // On delete, subtract amount from total and remove the row
        total -= amount;
        totalAmountCell.textContent = total.toFixed(2);
        tableBody.removeChild(row);
    });
    deleteCell.appendChild(deleteButton);

    // Update total
    total += amount;
    totalAmountCell.textContent = total.toFixed(2);

    // Clear input fields
    amountInput.value = "";
    dateInput.value = "";
});


