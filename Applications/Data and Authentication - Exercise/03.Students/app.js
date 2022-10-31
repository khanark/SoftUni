(async function solve() {
  const url = "http://localhost:3030/jsonstore/collections/students";
  const tbody = document.getElementById("table-body");
  const res = await fetch(url);
  const students = await res.json();

  Object.values(students).forEach((student) => {
    const tr = document.createElement("tr");
    Object.values(student)
      .slice(0, -1)
      .forEach((val) => {
        const cell = tr.insertCell();
        cell.textContent = val;
      });
    tbody.appendChild(tr);
  });

  document.getElementById("submit").addEventListener("click", async (ev) => {
    ev.preventDefault();
    const inputFields = Array.from(document.querySelector(".inputs").children);
    if (inputFields.some((field) => field.value == "")) {
      return;
    }
    if (inputFields.slice(2).some((field) => !isNaN(field))) {
      return;
    }
    const values = inputFields.map((field) => field.value);
    const [firstName, lastName, facultyNumber, grade] = values;
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ firstName, lastName, facultyNumber, grade }),
    });
    const tr = document.createElement("tr");
    values.forEach((val) => {
      const cell = tr.insertCell();
      cell.textContent = val;
    });
    tbody.appendChild(tr);
    inputFields.forEach((field) => (field.value = ""));
  });
})();
