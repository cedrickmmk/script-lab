# JavaScript Functions & Conditional Logic Lab

This repository contains my solutions for practicing JavaScript functions, parameters, string manipulation, conditional logic, and refactoring.

## Tasks Completed
* **Task 1 (`formatFullName`):** Formats first and last names with proper capitalization (`LastName, FirstName`) and validates against missing inputs.

* **Task 2 (`calculateTotalCost`):** Calculates the total cost of items including sales tax and validates that all inputs are valid numbers.

* **Task 3 (`checkEligibility`):** Uses conditional logic (`if`, `else if`, `else`) to evaluate program eligibility based on age and employment status.

* **Task 4 (`calculateTotalCost` Refactored):** Updates `calculateTotalCost` to support an optional `discount` parameter using a default value (`discount = 0`), subtracting any discount before applying tax.

## Reflection Questions

### 1. How did you approach creating more flexible functions with parameters?
I approached this by using parameters as placeholders so each function can work with any input values rather than hardcoded data. For optional inputs like `discount` in `calculateTotalCost`, setting a default parameter (`discount = 0`) allowed the function to handle both discounted and regular prices seamlessly without needing separate functions.

### 2. What challenges did you face while incorporating conditional logic in your functions?
One challenge was making sure my `if` conditions checked the exact right edge cases—such as using `!firstName || !lastName` to catch missing strings and `typeof` to catch invalid number inputs. I also learned how important statement order is, since hitting a `return` statement exits the function immediately and skips any code written below it.

### 3. How does refactoring improve the readability and maintainability of your code?
Refactoring `calculateTotalCost` instead of writing a second function prevented duplicate code and kept the file organized. Having a single, reusable function makes the code easier to read and much easier to maintain, because any future updates to the tax or discount formula only need to be made in one place.

## Author

-**Name**: Cedrick Mbuyamba  
- GitHub - [@cedrickmmk](https://github.com)