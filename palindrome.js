function isPalindrome(string) {
    let isPalindrome;
    string === string.split('').reverse().join('').toString() ? isPalindrome = true : isPalindrome = false;
    return isPalindrome;
}

console.log(isPalindrome('nipin'));