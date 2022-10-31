function attachEvents() {
  const baseUri = "http://localhost:3030/jsonstore/forecaster/locations";
  const $ = (id) => document.getElementById(id);

  const endpoints = {
    catalog: (id, forecastType) =>
      `${baseUri.replace("locations", forecastType)}/${id} `,
  };

  const weatherSymbols = {
    Sunny: "&#x2600;",
    "Partly sunny": "&#x26C5;",
    Overcast: "&#x2601;",
    Rain: "&#x2614;",
    Degrees: "&#176;",
  };

  async function getForecast(_, forecastType) {
    try {
      const res = await fetch(endpoints.catalog(_, forecastType));
      const data = await res.json();

      if (Array.isArray(data)) {
        throw new Error();
      }

      return data;
    } catch (error) {
      $("forecast").textContent = "Error";
    }
  }

  function createElement(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.className = className;
    }
    return element;
  }

  function createSpan(content, className, inner) {
    const spanElement = document.createElement("span");
    spanElement.textContent = content;

    if (className != "") {
      spanElement.className = className;
    }

    if (inner) {
      spanElement.innerHTML = inner;
    }
    return spanElement;
  }

  function renderTodayInfo(obj) {
    const { name, forecast } = obj;
    const { low, high, condition } = forecast;
    const conditionSymbol = weatherSymbols[condition];

    const div = createElement("div", "", "forecasts");
    const symbolSpan = createElement("span", "", "condition symbol");
    symbolSpan.innerHTML = conditionSymbol;
    const conditionSpan = createElement("span", "", "condition");

    const html = `<span class="forecast-data">${name}</span>
      <span class="forecast-data">${low}${weatherSymbols.Degrees}/${high}${weatherSymbols.Degrees}</span>
      <span class="forecast-data">${condition}</span>`;

    conditionSpan.innerHTML = html;

    div.appendChild(symbolSpan);
    div.appendChild(conditionSpan);

    $("current").appendChild(div);
  }

  function renderInfoUpcoming(obj) {
    const { name, forecast } = obj;

    const divForecast = createElement("div", "", "forecast-info");

    forecast.forEach((dataInfo, i) => {
      const { low, high, condition } = dataInfo;

      const spanUpcoming = createSpan("", "upcoming", "");
      const symbolSpan = createSpan("", "symbol", weatherSymbols[condition]);
      const tempSpan = createSpan(
        "",
        "forecast-data",
        `${low}${weatherSymbols.Degrees}/${high}${weatherSymbols.Degrees}`
      );
      const conditionSpan = createSpan(condition, "forecast-data", "");
      [symbolSpan, tempSpan, conditionSpan].forEach((span) =>
        spanUpcoming.appendChild(span)
      );

      divForecast.appendChild(spanUpcoming);
    });

    $("upcoming").appendChild(divForecast);
  }

  $("submit").addEventListener("click", async () => {
    try {
      const res = await fetch(baseUri);
      const data = await res.json();
      const location = data.find((loc) => loc.name == $("location").value);

      if (!location) {
        throw new Error();
      }

      const today = await getForecast(location.code, "today");
      renderTodayInfo(today);

      const upcoming = await getForecast(location.code, "upcoming");
      renderInfoUpcoming(upcoming);
    } catch (err) {
      $("forecast").textContent = "Error";
    }
    $("forecast").style.display = "block";
  });
}

attachEvents();
