async function solution() {
  const url = "http://localhost:3030/jsonstore/advanced/articles/list";
  const main = document.getElementById("main");

  const response = await fetch(url);
  const data = await response.json();

  data.forEach((item) => {
    const { _id, title } = item;

    const div = document.createElement("div");
    div.classList.add("accordion");

    const html = `
    <div class="head">
      <span>${title}</span>
      <button class="button" id="${_id}">More</button>
    </div>
    <div class="extra">
      <p></p>
    </div>`;

    div.innerHTML = html;
    div.addEventListener("click", renderContent);

    main.appendChild(div);

    async function renderContent(e) {
      if (e.target.nodeName !== "BUTTON") {
        return;
      }

      const url = `http://localhost:3030/jsonstore/advanced/articles/details/${_id}`;
      const response = await fetch(url);
      const data = await response.json();

      div.lastChild.children[0].textContent = data.content;
      e.target.textContent = e.target.textContent === "More" ? "Less" : "More";
      div.lastChild.classList.toggle("extra");
    }
  });
}
solution();
