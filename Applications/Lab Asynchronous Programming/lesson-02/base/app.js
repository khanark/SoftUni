window.addEventListener("load", solution);

function createEl(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
        element.className = className;
    }

    return element;
}

function appendEls(parentElement, children = []) {
    children.forEach((child) => parentElement.appendChild(child));
}

// creating articles
async function solution() {
    const main = document.getElementById("main");
    const url = "http://localhost:3030/jsonstore/cookbook/recipes";
    const response = await fetch(url);
    const recipes = await response.json();

    Object.values(recipes).forEach((recipe) => {
        const article = document.createElement("article");
        article.classList.add("preview");
        article.id = recipe._id;

        const divTitle = createEl("div", "", "title");
        const h2Title = createEl("h2", recipe.name);
        const divSmall = createEl("div", "", "small");
        const img = createEl("img");
        img.src = recipe.img;

        divTitle.appendChild(h2Title);
        divSmall.appendChild(img);
        appendEls(article, [divTitle, divSmall]);
        main.appendChild(article);

        // article event handler
        article.addEventListener("click", async (ev) => {
            const url = `http://localhost:3030/jsonstore/cookbook/details/${ev.currentTarget.id}`;

            const response = await fetch(url);
            const data = await response.json();

            const { _id, name, img, steps, ingredients } = data;

            const html = `<h2>${name}</h2>
			<div class="band">
				<div class="thumb">
					<img src="${img}">
				</div>
				<div class="ingredients">
					<h3>Ingredients:</h3>
					<ul>
						${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
					</ul>
				</div>
			</div>
			<div class="description">
				<h3>Preparation:</h3>
				${steps.map((step) => `<p>${step}</p>`).join("")}
			</div>`;

            article.innerHTML = html;
        });
    });
}
