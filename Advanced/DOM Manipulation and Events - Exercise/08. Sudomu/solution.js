function solve() {
    const rows = document.querySelectorAll('tbody tr');
    const checkBtn = document.querySelectorAll('button')[0];
    const output = document.querySelector('#check');
    const div = document.querySelector('#container table');

    checkBtn.addEventListener('click', onCheck);

    function onCheck(e) {
        const matrices = createArray(rows);
        console.log(matrices);
        checkRows(matrices);
        checkCols(matrices);
    }

    function createArray(elements) {
        const result = [...elements].map((el) =>
            [...el.querySelectorAll('input')].map((el) => Number(el.value))
        );
        return result;
    }

    function checkRows(arr) {
        for (const row of arr) {
            const rows = row.filter((el, index, arr) => {
                if (el !== 0) {
                    return arr.indexOf(el) != index;
                }
            });
            if (rows.length > 0) {
                output.textContent = 'NOP! You are not done yet...';
                output.style.color = 'red';
                div.style.border = '2px solid red';
            }
        }
    }

    function checkCols(arr) {
        for (let row = 0; row < arr.length; row++) {
            const cols = [];
            for (let col = 0; col < arr.length; col++) {
                const currentValue = arr[col][row];
                cols.push(currentValue);
            }
            const result = cols.filter((el, index, arr) => {
                if (el !== 0) {
                    return arr.indexOf(el) != index;
                }
            });
            if (result.length > 0) {
                output.textContent = 'NOP! You are not done yet...';
                output.style.color = 'red';
                div.style.border = '2px solid red';
            }
        }
    }
}
