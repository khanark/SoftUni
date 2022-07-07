function sumTable() {
	// store all the product prices
	const prices = [...document.querySelectorAll('tr td:last-child')].slice(0, -1);

    // get the total sum of all product's prices
	const sum  = prices.reduce((sum, value) => sum + Number(value.textContent), 0)

    // render the total sum of all the products
    document.getElementById("sum").textContent = sum
}
