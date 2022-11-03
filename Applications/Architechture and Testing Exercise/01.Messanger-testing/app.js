function attachEvents() {
  const form = document.getElementById("controls");
  const msgContainer = document.getElementById("messages");
  const url = "http://localhost:3030/jsonstore/messenger";

  form.addEventListener("click", async (ev) => {
    if (ev.target.type !== "button") {
      return;
    }
    const inputFields = Array.from(
      ev.currentTarget.querySelectorAll('[type="text"]')
    );
    console.log(inputFields);
    if (ev.target.id == "submit") {
      const author = ev.currentTarget.children[1].value;
      const content = ev.currentTarget.children[4].value;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ author, content }),
      });
      inputFields.forEach((field) => (field.value = ""));
    } else {
      const response = await fetch(url);
      const data = await response.json();
      const messages = Object.values(data).map(
        (msg) => `${msg.author}: ${msg.content}`
      );
      msgContainer.textContent = messages.join("\n");
    }
  });
}

attachEvents();
