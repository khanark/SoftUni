function solve() {
    // ###DOM ELEMENTS###
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const email = document.getElementById('email');
    const birth = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');
    const addWorkerBtn = document.getElementById('add-worker');
    const tbody = document.getElementById('tbody');
    const sum = document.getElementById('sum');

    // elements array
    const elements = [firstName, lastName, email, birth, position, salary];

    // ###FUNCTIONS###
    // creates element with content and class
    const createElement = function (type, content, className) {
        const element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.className = className;
        }
        return element;
    };

    // appends elements argument to the parent argument
    const append = function (parent, elements) {
        elements.forEach(el => parent.appendChild(el));
    };

    // resets the values of the passed elements
    const resetInput = function (elements) {
        elements.forEach(el => (el.value = ''));
    };

    // updates the current salary
    const updateSalary = function (element) {
        const currentSalary = Array.from(element.getElementsByTagName('td'))[5].textContent;
        totalSum -= currentSalary;
        sum.textContent = totalSum.toFixed(2);
    };

    // global variable to keep track of the total salary
    let totalSum = 0;

    // ###EVENT HANDLING###
    addWorkerBtn.addEventListener('click', e => {
        e.preventDefault();

        if (elements.some(el => el.value == '')) {
            return;
        }

        totalSum += +salary.value;

        const tr = document.createElement('tr');

        const tds = elements.map(el => createElement('td', el.value));

        const buttonsTD = createElement('td');
        const firedBtn = createElement('button', 'Fired', 'fired');
        const editBtn = createElement('button', 'Edit', 'edit');

        append(buttonsTD, [firedBtn, editBtn]);
        tds.push(buttonsTD);
        append(tr, tds);

        tbody.appendChild(tr);
        sum.textContent = totalSum.toFixed(2);
        resetInput(elements);

        // edits the fields once again
        editBtn.addEventListener('click', e => {
            elements.forEach((el, i) => {
                el.value = tds[i].textContent;
            });
            updateSalary(tr);
            tr.remove();
        });

        // removes the worker and subtracts his salary from total salary
        firedBtn.addEventListener('click', e => {
            updateSalary(tr);
            tr.remove();
        });
    });
}
solve();
