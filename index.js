// Declare global variables for valid email and password and initialize them as null
let validUserEmail = null;
let validUserPassword = null;

//  Function called validateCredentials which takes two parameters: email and password
function validateCredentials(email, password) {
    // Assign the valid email and password inside the function default values
    validUserEmail = "Matovu_Solomon_H_Kacungwa@gmail.com";
    validUserPassword = "2200706285@2024";

    // Check if the provided email and password match the valid credentials specified in the above function 
    if (email === validUserEmail && password === validUserPassword) {
        // If User credentials are valid, Log a success message with the user's email 
        console.log("User Email is:  " + email  + " Login Successfull!");
    } else {
        // If the provided  User credentials are incorrect, log an error message
        console.log(" Incorrect login credentials .");
    }
}
// Call the validateCredentials function with valid specified User credentials.
validateCredentials("Matovu_Solomon_H_Kacungwa@gmail.com", "2200706285@2024");

