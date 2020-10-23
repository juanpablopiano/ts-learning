// type cat = 'meow' | number;

// type dog = {
// 	name: string;
// 	age: number;
// };

// type AddFn = (a: number, b: number) => number;
interface AddFn {
	(a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => n1 + n2;

interface Named {
	readonly name?: string;
	outPutName?: string;
	myMethod?(): void;
}

interface Greetable extends Named {
	greet(phrase: string): void;
}

class Person implements Greetable {
	name?: string;
	age = 26;

	constructor(n: string) {
		if (n) {
			this.name = n;
		}
	}

	greet(phrase: string) {
		if (this.name) {
			console.log(phrase + ' ' + this.name);
		} else {
			console.log('Hi...');
		}
	}
}

let user1: Greetable;

user1 = new Person('Max');

user1.greet('Hi there, I am');
console.log(user1);
