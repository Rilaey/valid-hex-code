const validHexChars = ['a', 'b', 'c', 'd', 'e', 'f']

const isValidHex = (value) => {
    if (!value) return false;

    const splitHex = value.toLowerCase().split('');

    if (splitHex.length != 6) return false;

    for (let i = 0; i < splitHex.length; i++) {
        if (splitHex[0] != '#' || (i > 0 && !validHexChars.includes(splitHex[i]))) return false;
    }

    return true;
}

console.log(isValidHex('#abcde')) // true - valid hex
console.log(isValidHex('#abcdef')) // false - to long
console.log(isValidHex('#abc')) // false - to short
console.log(isValidHex('#abcdo')) // false - invalid char
console.log(isValidHex('#aaabb')) // true - valid hex