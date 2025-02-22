function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

console.log(add(2, 2)); // 4
console.log(subtract(10, 5)); // 5
console.log(multiply(3, 7)); // 21
console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // throws an error