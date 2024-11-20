if (document.getElementById("regbtn")) {
    let uName = document.getElementById("userName");
    let uEmail = document.getElementById("email");
    let uPswd = document.getElementById("pswd");

    let registerBtn = document.getElementById("regbtn");
    registerBtn.style.borderRadius="10px"
    registerBtn.style.padding="10px"
    registerBtn.style.backgroundColor="#FF8000"
    registerBtn.style.fontWeight="bold  "




    registerBtn.addEventListener("click", (e) => {
        let nameValue = uName.value;
        let emailValue = uEmail.value;
        let pswdValue = uPswd.value;

        localStorage.setItem("uName", nameValue);
        localStorage.setItem("uEmail", emailValue);
        localStorage.setItem("uPswd", pswdValue);

        alert("Registration Successful!");
        window.location.href = "login.html";
    });
}


if (document.getElementById("loginBtn")) {
    let logBtn = document.getElementById("loginBtn");
    logBtn.style.borderRadius="10px"
    logBtn.style.padding="10px"
    logBtn.style.backgroundColor="#FF8000"
    logBtn.style.fontWeight="bold  "

    logBtn.addEventListener("click", () => {
        let storageEmail = localStorage.getItem("uEmail");
        let storagePswd = localStorage.getItem("uPswd");

        let inputLgnEmail = document.getElementById("uEmail").value;
        let inputLgnPswd = document.getElementById("uPswd").value;

        if (storageEmail === inputLgnEmail && storagePswd === inputLgnPswd) {
            alert("Login successful!");
            window.location.href = "home.html";
        } else {
            alert("Invalid credentials. Please check your email and password.");
        }
    });
}
