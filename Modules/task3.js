export function myAdd(num1 =0, num2 =0) {
    return num1 + num2;
}

export function mySubstract(num1 =0, num2 =0) {
    return num1 - num2;
}

export function myDivide(num1 =0, num2 =0) {
    if (num2===0) {
        throw new Error('can not divide by zero');
    }
    return num1 / num2;
}

export function myMultiply(num1 =0, num2 =0) {
    return num1 * num2;
}