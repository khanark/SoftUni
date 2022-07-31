function add(num) {
    // first we create the sum variable
    let sum = 0;

    // create the inner function
    function inner(number) {
        sum += number;
        return inner;
    }

    // update thee value and make it recursive // call it again
    inner.toString = () => sum;
    return inner(num);
}
console.log(add(3)(1).toString());
