export function stringLength(myString ='') {
    if (myString.length<1||myString.length>10) {
        throw new Error('string length must be at least 1 and no exced 10');
    }
    return myString.length;
}

