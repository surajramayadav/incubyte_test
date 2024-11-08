Incubyte Assignment
This project includes a simple String Calculator developed using the Test-Driven Development (TDD) approach. The calculator can add numbers in a string format, handling custom delimiters, newline characters, and rejecting negative numbers.

Prerequisites
Node.js (v14 or higher recommended)
npm (Node Package Manager, comes with Node.js)
Getting Started
1. Clone the Repository
bash
Copy code
git clone https://github.com/surajramayadav/incubyte_test.git
cd incubyte_test
2. Install Dependencies
Run the following command to install the project's dependencies:

bash
Copy code
yarn
3. Run Tests
This project uses Jest as the testing framework. To run the tests, use the following command:

bash
Copy code
yarn test
Project Structure
StringCalculator.js - Contains the main logic for the String Calculator.
StringCalculator.test.js - Contains test cases for validating the String Calculator's functionality.
Example Usage
The String Calculator supports:

Empty string input
Single number input
Multiple numbers separated by commas or newline characters
Custom delimiters
Throws an exception if negative numbers are provided
Running Tests
To ensure the code works correctly, tests have been written in Jest. To run the tests, simply execute:

bash
Copy code
yarn test
Additional Notes
If you encounter any issues, ensure you are using the correct Node.js version and have installed all dependencies with yarn.
