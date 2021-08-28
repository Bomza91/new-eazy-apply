
const extractAbbr = (string) => {
    const firstLetter = string[0];
    const extraLetters = string
    .match(/\s\w/g)
    .map(val => val[1])
    .map(val => val.toUpperCase())
    .slice(0,2)

    return `${firstLetter} ${extraLetters.joinO('')}`;
}

// console.log(extractAbbr('Hello this is a long tittle')) 