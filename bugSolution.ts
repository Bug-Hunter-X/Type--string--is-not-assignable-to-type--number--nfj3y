function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

function subtract(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a - b;
}

let result1 = add(5, 3); // result1 will be 8
let result2 = subtract(10, 4); // result2 will be 6

console.log(result1); // Output: 8
console.log(result2); // Output: 6

// Example of handling potential string input
function addSafe(a: string | number, b: string | number): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Inputs must be numbers or parsable strings');
  }
  return numA + numB;
}
console.log(addSafe("5", 3)); // Output: 8
console.log(addSafe(10, "4")); //Output: 14