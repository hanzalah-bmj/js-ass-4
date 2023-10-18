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

    document.getElementById("signUpHead").innerText = "Register Successfully"
    console.log(users);

}

function signIn() {
    let uMail = document.getElementById("loginMail").value;
    let uPassword = document.getElementById("loginPassword").value;
    for (let i = 0; i < users.length; i++) {
        if (users[i].userMail == uMail && users[i].userPassword == uPassword) {
            document.getElementById("signInHead").innerText = "Login Successfully..";
            document.getElementById("signInHead2").innerText = "Welcome " + users[i].userName;

        }
        else {
            console.log("Invalid Email Password")
        }
    }
    uMail = document.getElementById("loginMail").value = "";
    uPassword = document.getElementById("loginPassword").value = "";
}