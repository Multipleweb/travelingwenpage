function validation () {
    var username = document.getElementById('name').value;
    var password = document.getElementById('pwd').value;
    var cpassword = document.getElementById('cpwd').value;

    var predefinedUsername = "admin";
    var predefinedPassword = "123";

    if (username === "" || password === "") {
        alert("Username and password cannot be empty!");
        return false;
    } else if (username !== predefinedUsername || password !== predefinedPassword) {
        alert("Incorrect username or password!");
        return false;
    } else if(cpassword !== predefinedPassword) {
        alert("Confirm Password please enter Password eqaul to Confirm Password");
        return false;
    }else{
        alert("login success");
        return true;
    }
}