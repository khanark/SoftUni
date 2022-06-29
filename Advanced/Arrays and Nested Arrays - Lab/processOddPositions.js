function reverseAndDoubleOdd(arr) {
    // filter the numbers on odd indices
    const numbersOnOddIndex = arr.filter((el, index) => index % 2 == 1)

    // double the values of the filtered array
    const doubledElements = numbersOnOddIndex.map(el => el * 2)

    // reverse the doubled values
    const reversedElements = doubledElements.reverse()

    // print the output
    console.log(reversedElements);
}
reverseAndDoubleOdd([3, 0, 10, 4, 7, 3])