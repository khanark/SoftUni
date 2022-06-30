function addRemoveElement(commands) {
    // create the result array to store the valid values
    const result = []

    // create initial number
    let initialNumber = 0

    // loop the commands array and implement logic behind each command
    for (const command of commands) {
        switch (command) {
            case "add":
                initialNumber++
                result.push(initialNumber)
                break
            case "remove":
                initialNumber++
                result.pop()
                break
        }
    }

    // print the output
    if (result.length > 0) {
        result.forEach(el => console.log(el))
    } else {
        console.log("Empty");
    }
}
addRemoveElement(['remove',
    'remove',
    'remove']
)