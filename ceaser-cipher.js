function ceaserCipher(string, number) {
    const alphabhet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabhetArray = alphabhet.split('');

    string = string.split('').map(eachChar => {
        return alphabhetArray[alphabhetArray.findIndex(consonant => consonant === eachChar) + number];
    })

    console.log(string.join(''));
}


ceaserCipher('hello world', 2);