const btnLoad = document.getElementById("btnLoad");
const btnCreate = document.getElementById("btnCreate");
const phonesList = document.getElementById("phonebook");
const person = document.getElementById("person");
const phone = document.getElementById("phone");

const endpoints = {
  base: "http://localhost:3030/jsonstore/phonebook",
  catalog(id) {
    return `${this.base}/${id}`;
  },
};

btnLoad.addEventListener("click", onLoad);
btnCreate.addEventListener("click", onCreate);
phonesList.addEventListener("click", handlePhones);

async function onLoad() {
  try {
    const res = await fetch("http://localhost:3030/jsonstore/phonebook");
    const data = await res.json();
    if (res.ok == false) {
      throw new Error(data.message);
    }
    phonesList.replaceChildren(...Object.values(data).map(listNumber));
  } catch (error) {
    alert(error.message);
  }
}

function listNumber(contact) {
  const li = document.createElement("li");
  li.setAttribute("data-id", contact._id);
  li.innerHTML = `${contact.person}: ${contact.phone}<button>Delete</button>`;
  return li;
}

async function onCreate() {
  if (person.value == "" || phone.value == "") {
    return alert("empty fields");
  }
  try {
    const res = await fetch(endpoints.base, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ person: person.value, phone: phone.value }),
    });
    const data = await res.json();
    if (res.ok == false) {
      throw new Error(data.message);
    }
    person.value = "";
    phone.value = "";
    await onLoad();
  } catch (error) {
    alert(error.message);
  }
}

async function handlePhones(ev) {
  const id = ev.target.parentNode.dataset.id;
  console.log(id);
  console.log(endpoints.catalog(id));
  if (ev.target.nodeName !== "BUTTON") {
    return;
  }
  try {
    await fetch(endpoints.catalog(id), {
      method: "delete",
    });
  } catch (error) {
    alert(error.message);
  }
  ev.target.parentNode.remove();
}
