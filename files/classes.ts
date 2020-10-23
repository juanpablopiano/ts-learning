abstract class Department {
	static fiscalYear = 2020;
	// private id: string;
	// public name: string;
	protected employees: string[] = [];

	constructor(protected readonly id: string, public name: string) {
		// this.id = id;
		// this.name = n;
		// console.log(Department.fiscalYear);
	}

	static createEmployee(name: string) {
		return {
			name,
		};
	}

	abstract describe(this: Department): void;

	addEmployee(employee: string) {
		// this.id = 4;
		this.employees.push(employee);
	}

	printEmployeeInformation(): void {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

class ITDepartment extends Department {
	admins: string[];
	constructor(id: string, admins: string[]) {
		super(id, 'IT');
		this.admins = admins;
	}

	describe() {
		console.log(`ID Department - ID: ${this.id}`);
	}
}

class AccountingDepartment extends Department {
	private lastReport: string;

	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport;
		}
		throw new Error('No report found.');
	}

	set mostRecentReport(value: string) {
		if (!value) {
			throw new Error('Please pass in a valid value!');
		}
		this.addReport(value);
	}

	constructor(id: string, private reports: string[]) {
		super(id, 'Accounting');
		this.lastReport = reports[0];
	}

	describe() {
		console.log(`Departmend ID - ${this.id}`);
	}

	addEmployee(name: string) {
		if (name === 'Max') {
			return;
		}
		this.employees.push(name);
	}

	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}

	printReports(): void {
		console.log(this.reports);
	}
}

const employee1 = Department.createEmployee('Maximo');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);

const accounting = new AccountingDepartment('a1', []);

accounting.mostRecentReport = 'The world is on fire';

accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('Juanix');

accounting.describe();

it.name = 'IT';

it.addEmployee('Juan');
it.addEmployee('Max');
// it.employees[2] = 'Peter'; /* Cannot do because the property is private */

// const accountingCopy = { describe: it.describe };
// accountingCopy.describe(); /* Cannot do this because it has to be an instance of the object */

it.describe();
it.printEmployeeInformation();

// it.printEmployeeInformation();
