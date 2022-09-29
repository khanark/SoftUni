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

  let totalProfit = 0;

  publishBtn.addEventListener('click', onPublish);
  tBody.addEventListener('click', onTbody);

  /**
   *
   * @param {event object} e event delegation for each button
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

  function onEdit(e) {
    const tdElements = Array.from(
      e.target.parentNode.parentNode.children
    ).slice(0, 6);

    inputElements.forEach((el, i) => (el.value = tdElements[i].textContent));
    e.target.parentNode.parentNode.remove();
  }

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

  function createElement(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.className = className;
    }
    return element;
  }

  function append(type, childElements) {
    childElements.forEach((el) => type.appendChild(el));
  }
}
