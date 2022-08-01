function calculator() {
    return {
        // we create three keys in the same object, keys are containing elements
        init: (selector1, selector2, resultSelector) => {
            this.selector1 = document.querySelector(selector1);
            this.selector2 = document.querySelector(selector2);
            this.resultSelector = document.querySelector(resultSelector);
        },
        // we implement the add and subtract functionalities by getting the value of the keys in the object
        add: () => {
            this.resultSelector.value =
                Number(this.selector1.value) + Number(this.selector2.value);
        },
        subtract: () => {
            this.resultSelector.value =
                Number(this.selector1.value) - Number(this.selector2.value);
        },
    };
}

const calculate = calculator();
console.log(calculate.init('#num1', '#num2', '#result'));
