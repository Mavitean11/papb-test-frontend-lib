/**
 * Adds two numbers.
 *
 * @param x First number to add
 * @param y Second number to add
 */
export function addTwoNumbers(x: number, y: number) {
    return x + y;
}

/**
 * Divides two numbers.
 *
 * @param x Numerator
 * @param y Denominator
 */
export function divide(x: number, y: number) {
    if (y === 0) throw new Error("Cannot divide by zero");
    return x / y;
}