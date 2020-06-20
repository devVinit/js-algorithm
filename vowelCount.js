const vowels = ['a', 'e', 'i', 'o', 'u'];

const words = "A quick brown dog jumps over a lazy man";

let count = 0;
for (const char of words) {
    if (vowels.includes(char)) count++;
}

console.log(count);