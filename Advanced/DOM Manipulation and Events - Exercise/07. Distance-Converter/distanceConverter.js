function attachEventsListeners() {
    const inputField = document.querySelector('#inputDistance');
    const outputField = document.querySelector('#outputDistance');
    const inputOption = document.querySelectorAll('#inputUnits');
    const outputOption = document.querySelectorAll('#outputUnits');
    const btn = document.querySelector('#convert');

    btn.addEventListener('click', () => {
        const rates = [1000, 1, 0.01, 0.001, 1609.34, 0.9144, 0.3048, 0.0254];
        const names = ['km', 'm', 'cm', 'mm', 'mi', 'yrd', 'ft', 'in'];
        console.log(inputOption);
        console.log(inputOption);
        const currentMultiplier = rates[names.indexOf(inputOption.value)];
        const value = Number(inputField.value);
        const meters = value * currentMultiplier;
        const result = meters / rates[names.indexOf(outputOption.value)];

        outputField.value = result;
    });
}
