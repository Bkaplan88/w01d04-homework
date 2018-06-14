

// Functions

// 2: parameter is set to the fucntion and serve as placeholders to which arguments can later be passed.

// 3: return assigns a value to and exits the function. console.log simply prints the theoretical value to the hidden console

// write function to reverse string and store return in new variable reverseVariable

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





// write function to check if reverseVariable matches original string