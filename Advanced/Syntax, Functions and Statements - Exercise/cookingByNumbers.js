function solve(number, op1, op2, op3, op4, op5) {
    const operations = [op1, op2, op3, op4, op5]
    let num = Number(number)

    for (const command of operations) {
        switch (command) {
            case "chop": num /= 2; break
            case "dice": num = Math.sqrt(num); break
            case "spice": num++; break
            case "bake": num *= 3; break
            case "fillet": num *= 0.8; break
        }
        console.log(num);
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')