const registerForm = document.getElementById("register-form");
const error = document.getElementById("error-message");

function validateFields(elements) {
    elements.forEach((el) => {
        el.style.borderColor = "red";
        el.value = "";
    });
}

registerForm.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    const formElements = Object.values(registerForm);
    const passEls = formElements.slice(1, 3);
    const missingFields = formElements.filter((el) => el.value == "");

    let { email, password, rePass } = Object.fromEntries(
        new FormData(ev.currentTarget).entries()
    );

    if (password == rePass) {
        const url = "http://localhost:3030/users/register";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.code) {
            validateFields(missingFields);
            error.textContent = data.message;
        } else {
            sessionStorage.setItem("token", data.accessToken);
            window.location = "/base/index.html";
        }
    } else {
        validateFields(passEls);
        error.textContent = "Passwords do not match";
    }
});
