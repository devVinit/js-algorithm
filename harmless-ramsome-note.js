function harmless(note, magzine) {
    var noteIsPossible;
    note.split(' ').forEach(element => {
        magzine.includes(element) ? noteIsPossible = true : noteIsPossible = false;
    });

    return noteIsPossible;
}


console.log(harmless('hello world', 'hello world vinit'));