import { capitalize } from "../Modules/task4";

describe('Capitalize strings', () => {

    test('lower case: ', () => {
        expect(capitalize("alejandro")).toBe("Alejandro");
    });

    test('upper case: ', () => {
        expect(capitalize("ALEJANDRO")).toBe("Alejandro");
    });

    test('mixed case: ', () => {
        expect(capitalize("aLeJaNdRo")).toBe("Alejandro");
    });

    test('start with numbers||spaces: ', () => {
        expect(capitalize("1 // 456  aleJAndro")).toBe("1 // 456  Alejandro");
    });

    test('only strings allowed: ', () => {
        expect(() => capitalize(0)).toThrow(Error);
    });

});