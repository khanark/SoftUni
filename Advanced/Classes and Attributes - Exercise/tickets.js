function solve(arr, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const result = arr.map(line => {
        const [destination, price, status] = line.split('|');
        return new Ticket(destination, price, status);
    });

    const sorted = result.sort((a, b) => {
        if (sortingCriteria == 'price') {
            return a.price - b.price;
        } else {
            return a[sortingCriteria].localeCompare(b[sortingCriteria]);
        }
    });
    return sorted;
}

console.log(
    solve(
        [
            'Philadelphia|94.20|available',
            'New York City|95.99|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed',
        ],
        'price'
    )
);
