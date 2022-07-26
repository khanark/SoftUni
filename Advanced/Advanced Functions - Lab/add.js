function solution(number) {
    // return new function that takes newNumber as an parameter and returns
    // the result of adding the new number to the previous one
    return (newNUmber) => number + newNUmber;
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
