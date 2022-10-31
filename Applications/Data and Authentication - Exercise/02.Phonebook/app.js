function attachEvents() {
  const url = "http://localhost:3030/jsonstore/phonebook";
  const $ = (id) => document.getElementById(id);

  async function getPhoneBookEntries() {
    const res = await fetch(url);
    const data = await res.json();
    const phoneBookData = Object.values(data);
    const listItems = phoneBookData.map(
      (entry) =>
        `<li id="${entry._id}">${entry.person}: ${entry.phone}<button>Delete</button></li>`
    );
    $("phonebook").innerHTML = listItems.join("\n");
  }

  async function deleteNumber(ev) {
    if (ev.target.nodeName !== "BUTTON") {
      return;
    }
    const id = ev.target.parentNode.id;
    const [person, phone] = ev.target.parentNode.textContent
      .replace(" Delete", "")
      .split(": ");
    fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ person, phone }),
    });
    ev.target.parentNode.remove();
  }

  async function createEntry() {
    const person = $("person").value;
    const phone = $("phone").value;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ person, phone }),
    });
    $("person").value = "";
    $("phone").value = "";
  }

  $("phonebook").addEventListener("click", deleteNumber);
  $("btnLoad").addEventListener("click", getPhoneBookEntries);
  $("btnCreate").addEventListener("click", createEntry);
}

attachEvents();
