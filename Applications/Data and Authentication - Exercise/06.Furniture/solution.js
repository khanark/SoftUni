window.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch('http://localhost:3030/data/furniture');
    const data = await res.json();
    document.querySelector('tbody').replaceChildren(data.map(listElement));
});

function listElement(data) {
    const tr = document.createElement('tr');
    const html = `
	<td>
		<img src="${data.img}">
	</td>
	<td>
		<p>${data.name}</p>
	</td>
	<td>
		<p>${data.price}</p>
	</td>
	<td>
		<p>${data.decFactor}</p>
	</td>
	<td>
		<input type="checkbox">
	</td>
`;
    tr.innerHTML = html;
    return tr;
}
