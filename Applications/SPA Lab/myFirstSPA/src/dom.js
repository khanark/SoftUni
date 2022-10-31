export function e(type, attributes, ...children) {
    const el = document.createElement(type);

    Object.keys(attributes).forEach(key => {
        el.setAttribute(key, attributes[key]);
    });

    children.forEach(child => {
        if (typeof child == 'string') {
            el.appendChild(document.createTextNode(child));
        } else {
            el.appendChild(child);
        }
    });

    return el;
}

export function showSection(section) {
    document.getElementById('mainSection').replaceChildren(section);
}
