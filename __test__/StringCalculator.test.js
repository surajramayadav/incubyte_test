const StringCalculator = require("../StringCalculator");

describe("StringCalculator", () => {
    test("returns 0 for an empty string", () => {
        expect(StringCalculator.add("")).toBe(0);
    });

    test("returns the number itself if only one number is provided", () => {
        expect(StringCalculator.add("1")).toBe(1);
    });

    test("returns the sum of two numbers separated by a comma", () => {
        expect(StringCalculator.add("1,5")).toBe(6);
    });

    test("handles an unknown amount of numbers", () => {
        expect(StringCalculator.add("1,2,3,4,5")).toBe(15);
    });

    test("handles new lines between numbers", () => {
        expect(StringCalculator.add("1\n2,3")).toBe(6);
    });

    test("supports custom delimiters", () => {
        expect(StringCalculator.add("//;\n1;2")).toBe(3);
    });

    test("throws an exception for negative numbers", () => {
        expect(() => StringCalculator.add("1,-2,3")).toThrow(
            "Negative numbers not allowed: -2"
        );
    });

    test("shows all negative numbers in the exception message", () => {
        expect(() => StringCalculator.add("1,-2,-3,4")).toThrow(
            "Negative numbers not allowed: -2, -3"
        );
    });

});
