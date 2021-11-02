//chap 6
//pen example 
const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};
console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

//aurora coding 
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 30,

    describe() {
        // Aurora is harmed by an arrow
        aurora.health -= 30;
        // Aurora equips a strength necklace
        aurora.strength += 10;
        //learns a new skill
        aurora.xp += 40;

        return (`${this.name} has ${this.health} health points, ${this.xp} XP points, and ${this.strength} as strength`);
    }
};

console.log(aurora.describe());

//dog exercise

const dog = {
    name: "Brownie",
    species: "beagle",
    size: 75,

    // Make the dog bark
    bark() {
        return "Grrr! Grrr!";
    }
};
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// chap 7

const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
movies.unshift("Pacific Rim");
console.log(movies[0]); // "Pacific Rim"

//musketeers
const musketeers = ["Athos", "Pathos", "Aramis"];
console.log("Here are the three musketeers:");
for (let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");
console.log("Now there are four of them:");
musketeers.forEach(musketeer => {
    console.log(musketeer);
});

musketeers.splice(2, 1);
console.log("Aramis has died!");
for (const musketeer of musketeers) {
    console.log(musketeer);
}

//sum of values

const values = [3, 11, 7, 2, 9, 10];
let sum = 0;
for (const value of values) {
    sum += value;
}

console.log(sum);

//chap 8

// word program

const word = prompt("Enter a word:");
console.log(`The word ${word} is ${word.length} characters long`);
console.log(`Its lowercase value is ${word.toLowerCase()}`);
console.log(`Its uppercase value is ${word.toUpperCase()}`);

//vowel count 

let vowelCount = 0;
[...word].forEach(letter => {
    const lowerLetter = letter.toLowerCase();
    if (
        lowerLetter === "a" ||
        lowerLetter === "e" ||
        lowerLetter === "i" ||
        lowerLetter === "o" ||
        lowerLetter === "u" ||
        lowerLetter === "y"
    ) {
        vowelcount++;
    }
})

console.log(`It has ${vowelCount} vowels`);

// adding backwardword

let backwardWord = "";
[...word].forEach(letter => {
    const lowerLetter = letter.toLowerCase(); {
        backwardWord = letter + backwardWord;
    }
});

console.log(`Its backwards value is ${backwardWord}`);

if (word.toLowerCase() === backwardWord.toLowerCase()) {
    console.log("It's a palindrome");
}