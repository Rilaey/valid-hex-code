const validHexChars = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const isValidHex = (value) => {
    if (!value) return false;

    if (value.length != 6) return false;

    for (let i = 0; i < value.length; i++) {
        if (value[0] != '#' || (i > 0 && !validHexChars.includes(value[i]))) return false;
    }

    return true;
}

console.log(isValidHex('#abcde')) // true - valid hex
console.log(isValidHex('#abcdef')) // false - to long
console.log(isValidHex('#abc')) // false - to short
console.log(isValidHex('#abcdo')) // false - invalid char
console.log(isValidHex('#aaabb')) // true - valid hex
console.log(isValidHex('#12345')) // true - valid hex