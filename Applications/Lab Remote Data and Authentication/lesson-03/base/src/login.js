const loginForm = document.getElementById("login-form");
const error = document.getElementById("error-message");

loginForm.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    const url = "http://localhost:3030/users/login";
    const { email, password } = Object.fromEntries(new FormData(loginForm));

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.code) {
        error.textContent = data.message;
    } else {
        sessionStorage.setItem("token", data.accessToken);
        window.location = "/base/index.html";
    }

    loginForm.reset();
});
