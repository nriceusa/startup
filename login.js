function login() {
    register(); // Temporary placeholder
}

function register() {
    const usernameElement = document.querySelector("#username");
    localStorage.setItem("username", usernameElement.value);
    window.location.href = "my-profile.html";
}