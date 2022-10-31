const createForm = document.getElementById("create-form");
const error = document.getElementById("error-message");

createForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const url = "http://localhost:3030/data/recipes";

    let { name, img, ingredients, steps } = Object.fromEntries(
        new FormData(ev.currentTarget)
    );

    ingredients = Array.from(ingredients).join("").split("\n");
    steps = Array.from(steps).join("").split("\n");

    const elements = [name, img, ingredients, steps];

    if (elements.some((el) => el.length == 0)) {
        error.textContent = "Empty fields";
        return;
    }

    fetch(url, {
        method: "POST",
        headers: {
            "X-Authorization": sessionStorage.getItem("token"),
            "content-type": "application/json",
        },
        body: JSON.stringify({ name, img, ingredients, steps }),
    });

    window.location = "/base/index.html";
});
