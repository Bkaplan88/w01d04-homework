

// Functions

// 2: parameter is set to the fucntion and serve as placeholders to which arguments can later be passed.

// 3: return assigns a value to and exits the function. console.log simply prints the theoretical value to the hidden console

// Palindrome

const reverseWord = (str) => {
	let reverseString = str.replace(" ", "").split("").reverse("").join("");
	if (str.toLowerCase() === reverseString.toLowerCase()) {
		return true;
	} else {
		return false;
	}
	console.log(reverseString);
	console.log(str);
}


console.log(reverseWord("Radar"));
console.log(reverseWord("Borscht"));

// Digit Sum


let sum = 0;
const sumDigits = (num1) => {
	let total = num1.toString().split('');
	console.log(total);
	for (i = 0; i < total.length; i++) {

		sum += parseInt(total[i]);

	}
}

sumDigits(42);
		console.log(sum);

// Pythagorus



const calculateSide = (sideA, sideB) => {
	return Math.sqrt(sideA * sideA + sideB * sideB);
			
} 

console.log(calculateSide(8, 6));

// Sum array

let sum1 = 0
const sumArray = (arr) => {
	for (i = 0; i < arr.length; i++) {
		sum1 += arr[i];
		
	}
}
sumArray([1, 2, 3, 4, 5, 6]);
console.log (sum1);

// still working on this
const checkPrime = (input) => {
	for (i = 2; i < input; i++) {
		if (input % i === 0) {
			return false;

		} 

	}
	return true;
}


const printPrime = (input) => {
	for (let i = 0; i < input; i++) {
		if (checkPrime(i)) {
			console.log(i);
		}
	}

}

printPrime(97);



// reverse array

let testArr = ["a", "b", "c", "d", "e"];

const reverseArr = (arr) => {
	for (let i = 0; i < arr.length / 2; i++) {
	const tempVarr = arr[i]
	arr[i] = arr[arr.length - 1 - i];
	arr[arr.legnth - 1 - i] = tempVarr;
}

}



const insertDash = (num) => {
	let dash = "";
	num = num.toString();
	for (let i = 0; i < num.length; i++) {
		dash += num[i];
		if (num[i] % 2 === 1 && num[i + 1] % 2 === 1) {
			dash +=  "-";
			
			} 
	}
	return dash;	

}

console.log(insertDash(454793));















