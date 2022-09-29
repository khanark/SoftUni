window.addEventListener('load', solve);

function solve() {
  const make = document.getElementById('make');
  const model = document.getElementById('model');
  const year = document.getElementById('year');
  const fuelType = document.getElementById('fuel');
  const originalCost = document.getElementById('original-cost');
  const sellingPrice = document.getElementById('selling-price');
  const tBody = document.getElementById('table-body');
  const publishBtn = document.getElementById('publish');
  const carsList = document.getElementById('cars-list');
  const profit = document.getElementById('profit');

  const inputElements = [
    make,
    model,
    year,
    fuelType,
    originalCost,
    sellingPrice,
  ];

  /**
   * global variable to sum the total profit
   */
  let totalProfit = 0;

  /**
   * Event Handlers
   */
  publishBtn.addEventListener('click', onPublish);
  tBody.addEventListener('click', onTbody);

  /**
   *
   * @param {event handler} e event delegation for each button
   * fires onEdit() if className includes "edit" otherwise
   * fires onSell()
   * @returns
   */
  function onTbody(e) {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }

    e.target.className.includes('edit') ? onEdit(e) : onSell(e);
  }

  /**
   *
   * @param {event handler} e handles the click on publish button
   * validates the input fields and creates li item that is appended to tbody
   */
  function onPublish(e) {
    e.preventDefault();

    if (
      inputElements.every((element) => element.value != '') &&
      Number(sellingPrice.value) > Number(originalCost.value)
    ) {
      const tr = createElement('tr', '', 'row');
      const tds = inputElements.map((element) =>
        createElement('td', element.value)
      );

      const buttonsTD = createElement('td');
      const editBtn = createElement('BUTTON', 'Edit', 'action-btn edit');
      const sellBtn = createElement('BUTTON', 'Sell', 'action-btn sell');

      append(buttonsTD, [editBtn, sellBtn]);

      tds.forEach((td) => tr.appendChild(td));
      tr.appendChild(buttonsTD);
      tBody.appendChild(tr);
    }

    inputElements.forEach((el) => (el.value = ''));
  }

  /**
   *
   * @param {event handler} e handles the click on edit button
   * @returns the values for each input field so the user can edit them
   */
  function onEdit(e) {
    const tdElements = Array.from(
      e.target.parentNode.parentNode.children
    ).slice(0, 6);

    inputElements.forEach((el, i) => (el.value = tdElements[i].textContent));
    e.target.parentNode.parentNode.remove();
  }

  /**
   *
   * @param {event handler} e handles the click on sell button
   */
  function onSell(e) {
    const li = createElement('li', '', 'each-list');

    const tds = Array.from(e.target.parentNode.parentNode.children)
      .slice(0, 6)
      .map((el) => el.textContent);

    tds.splice(3, 1);

    e.target.parentNode.parentNode.remove();

    const currentProfit = +tds[4] - +tds[3];
    totalProfit += currentProfit;

    const makeModelSpan = createElement('span', `${tds[0]} ${tds[1]}`);
    const yearSpan = createElement('span', tds[2]);
    const profitSpan = createElement('span', `${currentProfit}`);

    append(li, [makeModelSpan, yearSpan, profitSpan]);
    carsList.appendChild(li);
    profit.textContent = totalProfit.toFixed(2);
  }

  /**
   *
   * @param {String} type the html element's type
   * @param {String} content the html's textContent
   * @param {String} className the html's className
   * @returns html element
   */
  function createElement(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.className = className;
    }
    return element;
  }

  /**
   *
   * @param {Parameter} type parent element reference
   * @param {Array} childElements child elements to append
   */
  function append(type, childElements) {
    childElements.forEach((el) => type.appendChild(el));
  }
}
