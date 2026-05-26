function checkPassword() {

    let password = document.getElementById("password").value;

    let strength = 0;

    let result = document.getElementById("result");

    let suggestion = document.getElementById("suggestion");

    let bar = document.getElementById("bar");


    // Length Check
    if(password.length >= 8){
        strength++;
    }

    // Uppercase Check
    if(/[A-Z]/.test(password)){
        strength++;
    }

    // Lowercase Check
    if(/[a-z]/.test(password)){
        strength++;
    }

    // Number Check
    if(/[0-9]/.test(password)){
        strength++;
    }

    // Special Character Check
    if(/[!@#$%^&*]/.test(password)){
        strength++;
    }


    // Weak Password
    if(strength <= 2){

        result.innerHTML = "Weak Password";
        result.style.color = "red";

        suggestion.innerHTML =
        "Use uppercase letters, numbers and special characters.";

        bar.style.width = "33%";
        bar.style.background = "red";
    }

    // Medium Password
    else if(strength <= 4){

        result.innerHTML = "Medium Password";
        result.style.color = "orange";

        suggestion.innerHTML =
        "Try adding more special characters for better security.";

        bar.style.width = "66%";
        bar.style.background = "orange";
    }

    // Strong Password
    else{

        result.innerHTML = "Strong Password";
        result.style.color = "green";

        suggestion.innerHTML =
        "Excellent! Your password is secure.";

        bar.style.width = "100%";
        bar.style.background = "green";
    }
}