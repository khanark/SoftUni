function employeeList(arr) {
    const employees = {
        name: [],
        personalNumber: [],
    };

    for (const employee of arr) {
        employees.name.push(employee);
        employees.personalNumber.push(employee.length);
    }
    const value = Object.values(employees);

    for (let i = 0; i < value[0].length; i++) {
        console.log(
            `Name: ${employees.name[i]} -- Personal Number: ${employees.personalNumber[i]}`
        );
    }
}
employeeList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal',
]);
