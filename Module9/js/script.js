function validateform() {
    const fields = ["firstname", "lastname", "city", "state", "zipcode"];
    let missingFields = [];
    let valid = true;

    fields.forEach(field => {
        const element = document.getElementById(field);
        element.classList.remove("error");
    
        if (!element.value || (field === "zipcode" && !/^\d{5}$/.test(element.value))) {
            element.classList.add("error");
            missingFields.push(field.charAt(0).toUpperCase() + field.slice(1));
            valid = false;
        }

    });

    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");

    if(!valid) {
        errorMessage.textContent = 'Error: The following fields are required - $(missingFields.join(", ")}';
        successMessage.textContent = "";
    } else {
        errorMessage.textContent = "";
        successMessage.textContent = "Form submitted successfully!";
    }

    return valid;
}