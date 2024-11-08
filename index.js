class StringCalculator {


    static checkStartString(str, prefix) {
        // check if the prefix length is greater than the string length
        if (prefix.length > str.length) return false;

        // terate through each character of the prefix
        for (let i = 0; i < prefix.length; i++) {
            // Compare each character
            if (str[i] !== prefix[i]) return false;
        }

        // If all characters match, return true
        return true;
    }


    static sumOfNumber(numArray) {

        let sum = 0;
        for (let i = 0; i < numArray.length; i++) {
            sum = sum + numArray[i]
        }

        // return sum of product
        return sum
    }


    // created static function for direct access
    static add(numbers) {

        // checking numbers consist anything or not
        if (numbers === "") return 0;

        // Check for custom delimiter
        let delimiter = /,|\n/;

        // checking numbers is start with "//" with or not
        if (this.checkStartString(numbers, "//")) {
            // split number into array
            const parts = numbers.split("\n");
            // remove this "//" 
            const delimiterString = parts[0].slice(2);
            // getting new regex
            delimiter = new RegExp(delimiterString);
            // store number from index 1
            numbers = parts[1];
        }

        // Split the string by delimiter
        const numList = numbers.split(delimiter);
        // convert into number
        const convertIntoNumber = numList.map((numbers) => parseInt(numbers))

        // Check for negative numbers
        const negatives = numList.filter((n) => n < 0);
        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
        }
        // return sum of product of an array
        console.log(this.sumOfNumber(convertIntoNumber))
        return this.sumOfNumber(convertIntoNumber);

    }

}

console.log("Input: “”, Output: 0", StringCalculator.add(""))
console.log("Input: “1”, Output: 1", StringCalculator.add("1"))
console.log("Input: “1,5”, Output: 6", StringCalculator.add("1,5"))
console.log("Allow the add method to handle any amount of numbers", StringCalculator.add("1,5,1,1,2,1,51,100"))
console.log("Allow the add method to handle new lines between numbers (instead of commas)", StringCalculator.add("1\n2,3"))
console.log("To change the delimiter, the beginning of the string will contain a separate line that looks like this", StringCalculator.add("//;\n1;2"))
console.log("Calling add with a negative number will throw an exception:", StringCalculator.add("//;\n1;-2"))




module.exports = StringCalculator;