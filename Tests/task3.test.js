import { myAdd, mySubstract, myDivide, myMultiply } from "../Modules/task3";

describe('Calculator operations ', () => {

    test('addition: ', () => {
        expect(myAdd(2,2)).toBe(4);
    });

    test('substraction: ', () => {
        expect(mySubstract(2,2)).toBe(0);
    });

    test('multiplication: ', () => {
        expect(myMultiply(2,2)).toBe(4);
    });

    test('divition: ', () => {
        expect(myDivide(2,2)).toBe(1);
    });

    test('throws error if divide by zero', () => {
        expect(() => myDivide(2,0)).toThrow(Error);
    });
});