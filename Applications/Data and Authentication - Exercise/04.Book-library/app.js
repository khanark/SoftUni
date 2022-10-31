function e(type, attributes, ...children) {
    const el = document.createElement(type);

    Object.keys(attributes).forEach(key =>
        el.setAttribute(key, attributes[key])
    );

    children.forEach(child => {
        if (typeof child == 'string') {
            el.appendChild(document.createTextNode(child));
        } else {
            el.appendChild(child);
        }
    });

    return el;
}

async function request(type, url, body) {
    let res;

    if (type !== 'GET') {
        res = await fetch(url, {
            method: type,
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(body),
        });
    } else {
        res = await fetch(url);
    }
    return res;
}

function changeFormContent(form, title, buttonName, formFields) {
    form.firstElementChild.textContent = title;
    form.lastElementChild.textContent = buttonName;

    const inputFields = Array.from(form.querySelectorAll('[type="text"]'));

    inputFields.forEach((field, i) => {
        field.value = Object.values(formFields)[i];
    });
}

const loadBtn = document.getElementById('loadBooks');
const tbody = document.getElementById('tbody');
const form = document.getElementById('form');
const url = 'http://localhost:3030/jsonstore/collections/books';

loadBtn.addEventListener('click', async () => {
    tbody.innerHTML = '';
    const res = await request('GET', url);
    const books = await res.json();
    const bookIdCollection = Object.keys(books).map(key => key);

    Object.values(books).forEach((book, i) => {
        const { author, title } = book;

        const tr = e(
            'tr',
            {},
            e('td', {}, title),
            e('td', {}, author),
            e('td', {}, e('button', {}, 'Edit'), e('button', {}, 'Delete'))
        );

        tr.addEventListener('click', async ev => {
            if (ev.target.nodeName !== 'BUTTON') {
                return;
            }

            if (ev.target.textContent == 'Edit') {
                changeFormContent(form, 'edit FORM', 'Save', { title, author });
                form.classList.add(bookIdCollection[i]);
            } else {
                await request('DELETE', `${url}/${bookIdCollection[i]}`, {
                    author,
                    title,
                });

                ev.target.parentNode.parentNode.remove();
            }
        });

        tbody.appendChild(tr);
    });
});

form.addEventListener('submit', async ev => {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const { title, author } = Object.fromEntries(formData);

    const inputFields = Object.values(ev.currentTarget).slice(0, 2);
    const btn = ev.currentTarget.lastElementChild;

    if (inputFields.some(field => field.value == '')) {
        return;
    }

    if (btn.textContent == 'Submit') {
        await request('POST', url, { author, title });
    } else {
        await request('PUT', `${url}/${form.className}`, {
            author,
            title,
        });

        changeFormContent(form, 'FORM', 'Submit', {});
    }

    inputFields.forEach(field => (field.value = ''));
});
