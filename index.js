function validateForm(){
    let user = document.forms["checkout-form"]["user"].value;
    document.forms["checkout-form"]["user"].value = user.trim();
    if (user.trim() === ""){
        alert ("Enter name!");
        return false;
} 

return true; 

} 