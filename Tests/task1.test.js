import { stringLength } from "../Modules/task1";

test('character count', () => {
    expect(stringLength("Alex")).toBe(4);
});

test('throws error if less than 1 character', () => {
    expect(() => stringLength("")).toThrow(Error);
});

test('dont throws error if more than 0 character and less than 11', () => {
    expect(() => stringLength("alex")).not.toThrow(Error);
});

test('throws error if more than 10 character', () => {
    expect(() => stringLength("abcdefghijkl")).toThrow(Error);
});