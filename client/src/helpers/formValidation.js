const validators = {
	required: (str) => !!str,
	email: (str) =>
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			str
		),
	min: (str, length) => str.length > length,
	max: (str, length) => str.length <= length,
	regex: (str, regex) => regex.test(str),
	equals: (str1, str2) => str1 === str2,
};

const parsedRules = {
	username: [
		['required', ''],
		['min', '4'],
		['max', '10'],
		['regex', /[a-z -]/gi],
	],
	email: [
		['required', ''],
		['email', ''],
	],
	password: [
		['required', ''],
		['min', '4'],
		['max', '10'],
	],
	confirm_password: [
		['required', ''],
		['equals', 'password'],
	],
};

const messages = {
	required: 'Field :field is required!',
	min: 'The :field should be at least more then :min symbols!',
	max: 'The :field is too long. Max length  is :max!',
	regex: 'The :field contains unexpected symbols!',
	email: 'Invalid email!',
	equals: 'The passwords is not matched!',
};

const formData = {
	username: 'Ivan',
	email: 'not email',
	password: '123',
	confirm_password: '123',
};

const formValues = Object.entries(formData); // [['username', Ivan], ['email'], ['not email'], ...]

let errors = [];

const parseMessage = (message, field, arg, rule) => {
	const capitalizeField = field[0].toUpperCase() + field.slice(1);
	return message.replace(':field', capitalizeField).replace(`:${rule}`, arg);
};

for (const [key, value] of formValues) {
	for (const [rule, arg] of parsedRules[key]) {
		const isValid =
			rule === 'equals' ? validators[rule](value, formData[arg]) : validators[rule](value, arg);

		if (isValid) {
			continue;
		}

		const errorMessage = parseMessage(messages[rule], key, arg, rule);

		if (!errors[key]) {
			errors[key] = [errorMessage];
		} else {
			errors[key].push(errorMessage);
		}
	}
}
