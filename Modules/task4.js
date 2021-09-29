export function capitalize(str = '') {
    if (typeof str !== "string") {
        throw new Error("str is not a string");
    }
    str = str.toLowerCase();
    return str.replace(str.match(/[a-z]/)[0],str.match(/[a-z]/)[0].toUpperCase());   
}