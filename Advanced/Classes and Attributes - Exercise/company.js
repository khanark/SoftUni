class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        [...arguments].some(arg => {
            if (arg == '' || arg == undefined || arg == null) {
                throw new Error('Invalid input!');
            }
        });
        if (Number(salary) < 0) {
            throw new Error('Invalid input!');
        }
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }
        this.departments[department].push({
            name,
            salary: Number(salary),
            position,
        });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const bestDepartment = Object.entries(this.departments).sort((a, b) => {
            // a[1] and b[1] are the array with the objects
            const firstAverage =
                a[1].map(obj => obj.salary).reduce((a, b) => a + b) /
                a[1].length;
            const secondAverage =
                b[1].map(obj => obj.salary).reduce((a, b) => a + b) /
                b[1].length;
            return secondAverage - firstAverage;
        })[0];

        const averageSalary =
            bestDepartment[1].map(obj => obj.salary).reduce((a, b) => a + b) /
            bestDepartment[1].length;
        let sortedWorkers = bestDepartment[1].sort(
            (a, b) => b.salary - a.salary || a.name.localeCompare(b.name)
        );
        const workerInfo = sortedWorkers.map(
            obj => `${obj.name} ${obj.salary} ${obj.position}`
        );
        let result = `Best Department is: ${
            bestDepartment[0]
        }\nAverage salary: ${averageSalary.toFixed(2)}\n${workerInfo.join('\n')}
        `;
        return result.trimEnd();
    }
}
let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
// console.log(c.departments);
console.log(c.bestDepartment());
