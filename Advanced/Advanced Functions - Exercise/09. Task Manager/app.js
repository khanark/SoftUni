function solve() {
  const add = document.getElementById("add");
  const task = document.getElementById("task");
  const description = document.getElementById("description");
  const date = document.getElementById("date");
  const elements = [task, description, date];
  const openSection = document.querySelector(
    "body > main > div > section:nth-child(2) > div:nth-child(2)"
  );
  const progressSection = document.getElementById("in-progress");
  const completeSection = document.querySelector(
    "body > main > div > section:nth-child(4) > div:nth-child(2)"
  );

  function e(type, attributes, ...children) {
    const el = document.createElement(type);

    Object.keys(attributes).forEach((key) => {
      el.setAttribute(key, attributes[key]);
    });

    children.forEach((child) => {
      if (typeof child == "string") {
        el.appendChild(document.createTextNode(child));
      } else {
        el.appendChild(child);
      }
    });

    return el;
  }

  function createArticle(ev) {
    ev.preventDefault();

    if (elements.some((el) => el.value == "")) {
      return;
    }

    const article = e(
      "article",
      {},
      e("h3", {}, task.value),
      e("p", {}, `Description: ${description.value}`),
      e("p", {}, `Due Date: ${date.value}`),
      e(
        "div",
        { class: "flex" },
        e("button", { class: "green" }, "Start"),
        e("button", { class: "red" }, "Delete")
      )
    );

    function onStart(ev) {
      debugger;
      progressSection.appendChild(ev.currentTarget);
      Array.from(ev.currentTarget.querySelectorAll(".flex button")).forEach(
        (btn) => btn.remove()
      );
      const deleteBtn = e("button", { class: "red" }, "Delete");
      const finishBtn = e("button", { class: "orange" }, "Finish");
      deleteBtn.addEventListener("click", onDelete);
      ev.currentTarget.children[3].appendChild(deleteBtn);
      ev.currentTarget.children[3].appendChild(finishBtn);
    }

    function onDelete(ev) {
      ev.currentTarget.remove();
    }

    article.addEventListener("click", (ev) => {
      if (ev.target.nodeName !== "BUTTON") {
        return;
      }

      console.log(ev.target.textContent);
      if (ev.target.textContent == "Start") {
        onStart(ev);
      } else if (ev.target.textContent == "Delete") {
        onDelete(ev);
      } else if (ev.target.textContent == "Finish") {
        completeSection.appendChild(ev.currentTarget);
        ev.currentTarget.lastElementChild.remove();
      }
    });

    openSection.appendChild(article);
    elements.forEach((el) => (el.value = ""));
  }

  add.addEventListener("click", createArticle);
}
