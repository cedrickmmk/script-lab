//Task 1: Flexible String Manipulation with Functions

function formatFullName(firstName, lastName){
    // return (`${lastName} ${firstName}`);

    if(firstName || lastName){
        return ("Invalide name input")
    }

    let capFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    let capLast = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    return (`${capLast}, ${capFirst}`);

}
let fullName = formatFullName("cedrick", "mbuyamba"); 
console.log(fullName);

console.log(formatFullName("Cedrick"));
console.log(formatFullName("", "mbuyamba"))

///////////////////////////////////////////////////////////////////////////////////

// Task 2: Mathematical Operations with Multiple Parameters

function calculateTotalCost(price, quantity, taxRate){

    if (typeof price !== "number" || typeof quantity !== "number" || typeof taxRate !=="number"){
        return ("Invalide input");
    }

   let totalCost = (price * quantity) * (1 + taxRate);
   return totalCost;

}
console.log(calculateTotalCost(12, 4, 0.06));
console.log(calculateTotalCost('12', 4, 0.06))

////////////////////////////////////////////////////////////////////////////////////

// Task 3: Functions with Conditional Logic

function checkEligibility(age, isEmployed){

    if (age > 18 && isEmployed === true){
        return ("they are eligible");

    } else if (age > 18 && isEmployed ===false){
        return ("they are conditionally eligible");

    }else {
        return ("they are not eligible");
    }
}
console.log(checkEligibility(21, true))
console.log(checkEligibility(20, false))
console.log(checkEligibility(16, true))

/////////////////////////////////////////////////////////////////////////////////////////

// Task 4: Refactoring for Reusability

function calculateTotalCost(price, quantity, discount=o, taxRate, ){

    if (
        typeof price !== "number" ||
        typeof quantity !== "number" || 
        typeof taxRate !=="number" ||
        typeof discount !== "number"
    ){
        return ("Invalide input");
    }

   let totalCost = ((price * quantity) - discount) * (1 + taxRate);
   return totalCost;

}
console.log(calculateTotalCost(12, 4, 10, 0.06));