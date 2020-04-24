function reverseWord(string) {
    return string.split('').reverse().join('').toString();
}

console.log(reverseWord('this is a string of words'));