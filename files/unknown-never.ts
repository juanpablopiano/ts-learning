let userInput: unknown;
let username: string;

userInput = 5;
userInput = 'Juan';

if (typeof userInput === 'string') {
	username = userInput;
}

function generateError(message: string, code: number):never {
	throw { message: message, errorCode: code };
}

generateError('An error ocurred', 500);
