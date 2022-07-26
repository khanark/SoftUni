function solution(number) {
    // // create new function "add" that adds a new number to the previous one
    // function add(numberToAdd) {
    //     return number + numberToAdd;
    // }

    // // return the newly created function
    // return add;

    return (newNUmber) => number + newNUmber;
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
