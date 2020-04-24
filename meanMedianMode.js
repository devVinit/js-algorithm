function meanMedianMode(arrayy) {
    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    };
}

function getMean(array) {
    let mean = 0
    array.forEach(number => {
        mean += number;
    })

    return (mean / array.length);
}

function getMedian(array) {
    array = array.sort((a, b) => a - b);
    if (array.length % 2 !== 0) {

    }

}

function getMode(array) {

}

console.log(getMean([1, 2, 3, 4]));