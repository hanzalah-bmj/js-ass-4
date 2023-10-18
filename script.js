let users = [];

function signUp() {

    users.push({
        userName: document.getElementById("username").value,
        userMail: document.getElementById("usermail").value,
        userPassword: document.getElementById("userpassword").value,

    });
    userName: document.getElementById("username").value = "";
    userMail: document.getElementById("usermail").value = "";
    userPassword: document.getElementById("userpassword").value = "";

    let sUpMsg = document.getElementById("signUpHead").innerText = "Register Successfully";
    console.log(users);

}


function signIn() {
    let uMail = document.getElementById("loginMail").value;
    let uPassword = document.getElementById("loginPassword").value;
    for (let i = 0; i < users.length; i++) {
        if (uMail == users[i].userMail && uPassword == users[i].userPassword) {
            document.getElementById("signInHead").innerText = "Login Successfully..";

        }
        else {
            document.getElementById("signInHead").innerText = "Invalid Email Password..";
        }
    }
    uMail = document.getElementById("loginMail").value = "";
    uPassword = document.getElementById("loginPassword").value = "";
}