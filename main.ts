// 7Shifts
// Technical Interview
// String Calculator

// Evan Wiegers
// December 9th, 2020

// HOW TO USE:
// To run use command 'npm install' then 'npm run add' in this directory

/**
 * Function to sum a list of numbers
 * @param numbers string containing list of numbers
 *                  divided by one or more delimiters
 * Returns an integer of the data type number
 */
const add: (numbers: string) => number = (numbers: string) => {
	const delimiters = [',', ';', '@']; // <-- Edit delimiters here
	const regex = new RegExp(`[${delimiters.join('')}]`, 'g');

	const integers = numbers
		.split(regex)
		.map((item) => parseInt(item)) // I assumed all the inputted numbers are integers, if not use '(item) => parseInt(item, 10)' to round down floats
		.filter(Boolean);

	if (integers.some((int) => int < 0)) throw new Error(`Negatives not allowed: ${integers.filter((int) => int < 0)}`);
	else
		return integers.reduce((acc: number, cur: number) => {
			if (cur < 1000) return acc + cur;
			return acc;
		}, 0);
};

console.log('TESTS');
console.log('#####################################################################################\n');
// Test Case 1: simple number list
let testCase = '1,2,5';
try {
	console.log(`Result of simple number list test case: "${testCase}" is: ${add(testCase)}`);
} catch (err) {
	console.error(`Result of simple number list test case: "${testCase}" is: ${err.message}`);
}

console.log('#####################################################################################\n');
// Test Case 2: empty string
try {
	testCase = '';
	console.log(`Result of empty string test case: "${testCase}" is: ${add(testCase)}`);
} catch (err) {
	console.error(`Result of empty string test case: "${testCase}" is: ${err.message}`);
}

console.log('#####################################################################################\n');
// Test Case 3: handle newlines
try {
	testCase = '1\n,2,3';
	console.log(`Result of handle newlines test case: "${testCase}" is: ${add(testCase)}`);
} catch (err) {
	console.error(`Result of handle newlines test case: "${testCase}" is: ${err.message}`);
}

console.log('#####################################################################################\n');
// Test Case 4: custom delimiter ';'
try {
	testCase = '//;\n1;3;4\n';
	console.log(`Result of custom delimiter ';' test case: "${testCase}" is: ${add(testCase)}`);
} catch (err) {
	console.error(`Result of custom delimiter ';' test case: "${testCase}" is: ${err.message}`);
}

console.log('#####################################################################################\n');
// Test Case 5: negative number
try {
	testCase = '5,1,3,-10';
	console.log(`Result of negative number test case: "${testCase}" is: ${add(testCase)}`);
} catch (err) {
	console.error(`Result of negative number test case: "${testCase}" is: ${err.message}`);
}

console.log('#####################################################################################\n');
// Test Case 6: negative numbers
try {
	testCase = '5,-1,1,3,-10';
	console.log(`Result of negative numbers test case: "${testCase}" is: ${add(testCase)}`);
} catch (err) {
	console.error(`Result of negative numbers test case: "${testCase}" is: ${err.message}`);
}

console.log('#####################################################################################\n');
// Test Case 7: number 1001
try {
	testCase = '5,1001,3';
	console.log(`Result of number 1001 test case: "${testCase}" is: ${add(testCase)}`);
} catch (err) {
	console.error(`Result of number 1001 test case: "${testCase}" is: ${err.message}`);
}

console.log('#####################################################################################\n');
// Test Case 8: arbitrary delimiter length
try {
	testCase = '5,,,,,2,,,,,3';
	console.log(`Result of arbitrary delimiter length test case: "${testCase}" is: ${add(testCase)}`);
} catch (err) {
	console.error(`Result of arbitrary delimiter length test case: "${testCase}" is: ${err.message}`);
}

console.log('#####################################################################################\n');
// Test Case 9: multiple delimiters
try {
	testCase = '1,2;3@4';
	console.log(`Result of multiple delimiters test case: "${testCase}" is: ${add(testCase)}`);
} catch (err) {
	console.error(`Result of multiple delimiters test case: "${testCase}" is: ${err.message}`);
}

console.log('#####################################################################################\n');
// Test Case 10: multiple delimiters of arbitrary length
try {
	testCase = '1,@@2;;;;;3@,,,4';
	console.log(`Result of multiple delimiters of arbitrary length test case: "${testCase}" is: ${add(testCase)}`);
} catch (err) {
	console.error(`Result of multiple delimiters of arbitrary length test case: "${testCase}" is: ${err.message}`);
}

console.log('#####################################################################################\n');
// Test Case 10: all many test cases
try {
	testCase = '\n1,@\n1001@2;\n\n\n;;;;3@,,,4\n';
	console.log(`Result of many test cases: "${testCase}" is: ${add(testCase)}`);
} catch (err) {
	console.error(`Result of many test cases: "${testCase}" is: ${err.message}`);
}

console.log('#####################################################################################\n');
console.log('FIN');
