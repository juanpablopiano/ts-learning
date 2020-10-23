// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
// const person = {
// 	name: 'Juan',
// 	age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
	ADMIN = 5,
	READ_ONLY = 'Peter',
	AUTHOR = 200,
}

const person = {
	name: 'Juan',
	age: 30,
	hobbies: ['Sports', 'Cooking'],
	role: Role.ADMIN,
};

// person.role.push('admin'); // Push does work in tuples
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
	console.log('Is read only');
}


/* My code whatever */
// iife
(function log(text: string) {
	console.log(text);
})('Hello');

const color = document.getElementById('color');
const body = document.querySelector('body');

color.addEventListener('change', e => {
    body.style.backgroundColor = e.target.value;
});

const inputs = document.querySelectorAll('.input-number');
console.log(inputs);

let rgbColor = `rgb(${inputs[0].value}, ${inputs[1].value}, ${inputs[2].value})`;
console.log(rgbColor);

inputs.forEach(input => {
    input.addEventListener('change', () => {
        rgbColor = `rgb(${inputs[0].value}, ${inputs[1].value}, ${inputs[2].value})`;
        body.style.backgroundColor = rgbColor;
    })
})

