function solve() {
    const input = document.querySelector('textarea');
    const output = document.querySelector('textarea:last-of-type');
    const generateBtn = document.querySelector('button');
    const buyBtn = document.querySelector('button:last-of-type');
    const tbody = document.querySelector('tbody');

    generateBtn.addEventListener('click', onGenerate);
    buyBtn.addEventListener('click', onBuy);

    function onGenerate() {
        const data = JSON.parse(input.value);
        data.forEach(
            (obj) =>
                (tbody.innerHTML += `<tr>
         <td><img src=${obj.img}></td>
         <td><p>${obj.name}</p></td>
         <td><p>${obj.price}</p></td>
         <td><p>${obj.decFactor}</p></td>
         <td><input type="checkbox"/></td>
     </tr>`)
        );
    }

    function onBuy() {
        const checkBoxes = [...document.querySelectorAll('input:checked')];
        const productNames = [];
        let totalPrice = 0;
        let decFactor = 0;

        checkBoxes.forEach((box) => {
            const parent = box.parentNode.parentNode;
            const productName = parent.children[1].textContent;
            const price = Number(parent.children[2].textContent);
            const factor = Number(parent.children[3].textContent);

            productNames.push(productName);
            totalPrice += price;
            decFactor += factor;
        });

        output.textContent += `Bought furniture: ${productNames.join(', ')}\n`;
        output.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
        output.textContent += `Average decoration factor: ${
            decFactor / productNames.length
        }`;
    }
}
