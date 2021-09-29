export function capitalize(str = '') {
    str = str.toLowerCase();
    return str.replace(str.match(/[a-z]/)[0],str.match(/[a-z]/)[0].toUpperCase());   
}