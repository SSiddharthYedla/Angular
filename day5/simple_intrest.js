//1. Using Function Declaration
function calculateSimpleInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

// Function call
let si1 = calculateSimpleInterest(10000, 5, 2);
console.log("Simple Interest (Function Declaration):", si1);

//2. Using Function Expression
const calculateSimpleInterestExp = function (principal, rate, time) {
  return (principal * rate * time) / 100;
};

// Function call
let si2 = calculateSimpleInterestExp(15000, 6, 3);
console.log("Simple Interest (Function Expression):", si2);


