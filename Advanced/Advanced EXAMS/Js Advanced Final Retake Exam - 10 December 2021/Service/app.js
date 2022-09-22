window.addEventListener('load', solve);

function solve() {
    // ###DOM-ELEMENTS###
    const productType = document.getElementById('type-product');
    const description = document.getElementById('description');
    const clientName = document.getElementById('client-name');
    const clientPhone = document.getElementById('client-phone');
    const sendFormBtn = document.querySelector("[type='submit']");
    const clearBtn = document.querySelector('.clear-btn');
    const receivedOrders = document.getElementById('received-orders');
    const completedOrders = document.getElementById('completed-orders');

    const elements = [description, clientName, clientPhone];

    //###FUNCTIONS###
    const createElement = function (type, content, className) {
        const element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.classList.add(className);
        }
        return element;
    };

    const resetInput = function () {
        elements.forEach(el => (el.value = ''));
    };

    const append = function (parent, elements) {
        elements.forEach(el => parent.appendChild(el));
    };

    //###EVENT-HANDLING###
    sendFormBtn.addEventListener('click', e => {
        e.preventDefault();

        if (elements.some(el => el.value === '')) {
            return;
        }
        // main div
        const div = createElement('div', '', 'container');

        const h2 = createElement('h2', `Product type for repair: ${productType.value}`);
        const h3 = createElement('h3', `Client information: ${clientName.value}, ${clientPhone.value}`);
        const h4 = createElement('h4', `Description of the problem: ${description.value}`);

        // buttons
        const startBtn = createElement('button', 'Start repair', 'start-btn');
        const finishBtn = createElement('button', 'Finish repair', 'finish-btn');
        finishBtn.setAttribute('disabled', '');

        // appending to main div
        append(div, [h2, h3, h4, startBtn, finishBtn]);

        // appending to received orders
        receivedOrders.appendChild(div);

        // disables startBtn and enables finishBtn
        startBtn.addEventListener('click', e => {
            finishBtn.removeAttribute('disabled');
            startBtn.setAttribute('disabled', '');
        });

        // appends the finished div el to the completed-orders el
        finishBtn.addEventListener('click', e => {
            div.remove();
            Array.from(div.querySelectorAll('button')).forEach(btn => btn.remove());
            completedOrders.appendChild(div);
        });

        // resets all the input fields
        resetInput();
    });

    // clears all the div elements from completed-orders el
    clearBtn.addEventListener('click', e => {
        Array.from(completedOrders.querySelectorAll('div')).forEach(div => div.remove());
    });
}