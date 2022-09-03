function solve() {
    // DOM ELEMENTS
    const recipient = document.getElementById('recipientName');
    const title = document.getElementById('title');
    const message = document.getElementById('message');
    const list = document.querySelector('#list');
    const sentList = document.querySelector('.sent-list');
    const deleteList = document.querySelector('.delete-list');
    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');

    const storeInfo = function () {
        return {
            recipient: document.getElementById('recipientName').value,
            title: document.getElementById('title').value,
            message: document.getElementById('message').value,
        };
    };

    const createElement = function (type, content, id) {
        const element = document.createElement(type);
        element.textContent = content;
        element.id = id;
        return element;
    };

    const append = function (parent, array) {
        array.forEach(el => parent.appendChild(el));
    };

    const resetInput = function () {
        recipient.value = '';
        title.value = '';
        message.value = '';
    };

    addBtn.addEventListener('click', e => {
        e.preventDefault();
        const currentEmail = storeInfo();
        const isValidEmail = Object.keys(currentEmail).every(
            key => currentEmail[key] != ''
        );

        if (isValidEmail) {
            const li = createElement('li');
            const h4Title = createElement('h4', `Title: ${currentEmail.title}`);
            const h4Name = createElement(
                'h4',
                `Recipient Name: ${currentEmail.recipient}`
            );

            const span = createElement('span', `${currentEmail.message}`);
            const div = createElement('div', '', 'list-action');
            const sendBtn = createElement('button', 'Send', 'send');
            const deleteBtn = createElement('button', 'Delete', 'delete');
            append(div, [sendBtn, deleteBtn]); // appending to the div el
            append(li, [h4Title, h4Name, span, div]); // appending to the li el
            list.appendChild(li);

            sendBtn.addEventListener('click', () => {
                li.remove();

                const spanRecipient = createElement(
                    'span',
                    `To: ${currentEmail.recipient}`
                );
                const spanTitle = createElement(
                    'span',
                    `Title: ${currentEmail.title}`
                );
                const div = createElement('div');
                div.className = 'btn';
                const deleteBtn2 = createElement('button', 'Delete');
                deleteBtn2.className = 'delete';
                div.appendChild(deleteBtn2);
                const newLi = createElement('li');

                append(newLi, [spanRecipient, spanTitle, div]);
                sentList.appendChild(newLi);

                deleteBtn2.addEventListener('click', () => {
                    newLi.remove();
                    newLi.children[2].remove();
                    deleteList.appendChild(newLi);
                });
            });

            deleteBtn.addEventListener('click', () => {
                li.remove();

                const spanRecipient = createElement(
                    'span',
                    `To: ${currentEmail.recipient}`
                );
                const spanTitle = createElement(
                    'span',
                    `Title: ${currentEmail.title}`
                );
                const newLi = createElement('li');

                append(newLi, [spanRecipient, spanTitle]);
                deleteList.appendChild(newLi);
            });
        }
        resetInput();
    });

    resetBtn.addEventListener('click', e => {
        e.preventDefault();
        resetInput();
    });
}
solve();
