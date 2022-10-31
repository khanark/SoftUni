function getInfo() {
  const stopID = document.getElementById("stopId").value;
  const stopDiv = document.getElementById("stopName");
  const busList = document.getElementById("buses");
  const baseUrl = "http://localhost:3030/jsonstore/bus/businfo/";
  busList.innerHTML = "";

  fetch(`${baseUrl}${stopID}`)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error("Error");
      }
      return res.json();
    })
    .then((result) => {
      if (typeof result !== "object") {
        throw new Error();
      }

      const stopName = result.name;

      const busData = Object.entries(result.buses).map((entry) => {
        const busId = entry[0];
        const time = entry[1];

        return `Bus ${busId} arrives in ${time} minutes`;
      });

      stopDiv.textContent = stopName;

      busData.forEach((busInfo) => {
        const li = document.createElement("li");
        li.textContent = busInfo;
        busList.appendChild(li);
      });
    })
    .catch((err) => {
      stopDiv.textContent = "Error";
    });
}
