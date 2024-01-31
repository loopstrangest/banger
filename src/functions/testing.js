/** @format */

import englishWords from "an-array-of-english-words";
import { syllable } from "syllable";

const getUniqueWords = (text) => {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, " ")
    .split(" ")
    .filter(Boolean);
  const uniqueWords = [
    ...new Set(words.filter((word) => englishWords.includes(word))),
  ];

  return { uniqueWords };
};

const getAllWords = (text) => {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, " ")
    .split(" ")
    .filter(Boolean);
  const allWords = words.filter((word) => englishWords.includes(word));

  return { allWords };
};

export const levelOneLogic = (text) => {
  const { uniqueWords } = getUniqueWords(text);
  let count = 0;

  uniqueWords.forEach((word) => {
    const vowels = word.toLowerCase().replace(/[^aeiou]/gi, "");
    if (
      (vowels === "ae" || vowels === "ea") &&
      englishWords.includes(word.toLowerCase())
    ) {
      count++;
    }
  });

  return count;
};

export const levelTwoLogic = (text) => {
  const { uniqueWords } = getUniqueWords(text);
  let count = 0;

  uniqueWords.forEach((word) => {
    if (
      /([a-zA-Z])\1/i.test(word.toLowerCase()) &&
      englishWords.includes(word.toLowerCase())
    ) {
      count++;
    }
  });

  return count;
};

export const levelThreeLogic = (text) => {
  const { uniqueWords } = getUniqueWords(text);
  let count = 0;

  uniqueWords.forEach((word) => {
    if (word.length >= 11) {
      count++;
    }
  });

  return count;
};

export const levelFourLogic = (text) => {
  const { uniqueWords } = getUniqueWords(text);
  let count = 0;

  uniqueWords.forEach((word) => {
    if (
      word.charAt(0).toLowerCase() ===
      word.charAt(word.length - 1).toLowerCase()
    ) {
      count++;
    }
  });

  return count;
};

// Count increments if the word has 3 alphabetically consecutive letters:
// Examples: def in "definite", stu in "study", rst in "worst", etc.
export const levelFiveLogic = (text) => {
  const { uniqueWords } = getUniqueWords(text);
  let count = 0;

  uniqueWords.forEach((word) => {
    const lowerCaseWord = word.toLowerCase();
    for (let i = 0; i < lowerCaseWord.length - 2; i++) {
      if (
        lowerCaseWord.charCodeAt(i) === lowerCaseWord.charCodeAt(i + 1) - 1 &&
        lowerCaseWord.charCodeAt(i) === lowerCaseWord.charCodeAt(i + 2) - 2
      ) {
        count++;
        break;
      }
    }
  });

  return count;
};

export const levelSixLogic = (text) => {
  const { uniqueWords } = getUniqueWords(text);
  let count = 0;

  uniqueWords.forEach((word) => {
    const lowerCaseWord = word.toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"];
    let uniqueVowels = new Set();

    vowels.forEach((vowel) => {
      if (lowerCaseWord.includes(vowel)) {
        uniqueVowels.add(vowel);
      }
    });

    if (uniqueVowels.size >= 4) {
      count++;
    }
  });

  return count;
};

export const levelSevenLogic = (text) => {
  const { uniqueWords } = getUniqueWords(text);
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  uniqueWords.forEach((word) => {
    if (word.length >= 4) {
      let isAlternating = true;
      for (let i = 0; i < word.length - 1; i++) {
        if (
          (vowels.includes(word[i]) && vowels.includes(word[i + 1])) ||
          (!vowels.includes(word[i]) && !vowels.includes(word[i + 1]))
        ) {
          isAlternating = false;
          break;
        }
      }
      if (isAlternating) {
        count++;
      }
    }
  });

  return count;
};

export const levelEightLogic = (text) => {
  const { uniqueWords } = getUniqueWords(text);
  let count = 0;

  uniqueWords.forEach((word) => {
    if (word.length >= 4) {
      const middleIndex = Math.floor(word.length / 2);
      let middleLetters =
        word.length % 2 === 0
          ? word.slice(middleIndex - 1, middleIndex + 1)
          : word.slice(middleIndex - 1, middleIndex + 2);
      let reversedMiddleLetters = middleLetters.split("").reverse().join("");
      if (middleLetters === reversedMiddleLetters) {
        count++;
      }
    }
  });

  return count;
};

export const levelNineLogic = (text) => {
  const { uniqueWords } = getUniqueWords(text);
  let count = 0;

  uniqueWords.forEach((word) => {
    if (word.length >= 4) {
      let lastThreeLetters = word.slice(-3);
      if (englishWords.includes(lastThreeLetters)) {
        count++;
      }
    }
  });

  return count;
};

export const levelTenLogic = (text) => {
  const { uniqueWords } = getUniqueWords(text);
  let count = 0;

  uniqueWords.forEach((word) => {
    for (let i = 0; i < word.length - 1; i++) {
      const cluster = word.slice(i, i + 2);
      const restOfWord = word.slice(i + 2);
      if (restOfWord.includes(cluster)) {
        count++;
        break;
      }
    }
  });

  return count;
};

export const levelElevenLogic = (text) => {
  const { uniqueWords } = getUniqueWords(text);
  let count = 0;

  uniqueWords.forEach((word) => {
    const letterCounts = {};
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      letterCounts[letter] = (letterCounts[letter] || 0) + 1;
    }
    if (Object.values(letterCounts).some((count) => count >= 3)) {
      count++;
    }
  });

  return count;
};

export const levelTwelveLogic = (text) => {
  const { uniqueWords } = getUniqueWords(text);
  let count = 0;

  uniqueWords.forEach((word) => {
    if (word.length >= 5 && word[1] === word[word.length - 2]) {
      count++;
    }
  });

  return count;
};

export const levelThirteenLogic = (text) => {
  const { allWords } = getAllWords(text);
  let count = 0;
  const uniquePairs = new Set();

  for (let i = 0; i < allWords.length - 1; i++) {
    const firstWord = allWords[i];
    if (firstWord === "the") {
      console.log(firstWord);
    }
    const secondWord = allWords[i + 1];
    if (firstWord[firstWord.length - 1] === secondWord[0]) {
      const pair = firstWord + " " + secondWord;
      if (!uniquePairs.has(pair)) {
        uniquePairs.add(pair);
        count++;
      }
    }
  }

  return count;
};

export const levelFourteenLogic = (text) => {
  const { allWords } = getAllWords(text);
  let count = 0;
  const uniquePairs = new Set();

  for (let i = 0; i < allWords.length - 1; i++) {
    const pair = allWords[i] + " " + allWords[i + 1];
    const reversedPair = allWords[i + 1] + " " + allWords[i];
    if (!uniquePairs.has(pair) && !uniquePairs.has(reversedPair)) {
      uniquePairs.add(pair);
      const pairString = pair.replace(/[^aeiou]/g, "");
      const vowels = ["a", "e", "i", "o", "u"];
      let hasAllVowels = vowels.every((v) => pairString.includes(v));
      if (hasAllVowels && pairString.length === vowels.length) {
        console.log(pair);
        count++;
      }
    }
  }

  return count;
};

export const levelFifteenLogic = (text) => {
  const { allWords } = getAllWords(text);
  let count = 0;
  const uniquePairs = new Set();

  for (let i = 0; i < allWords.length - 1; i++) {
    const pair = allWords[i] + " " + allWords[i + 1];
    const reversedPair = allWords[i + 1] + " " + allWords[i];
    if (!uniquePairs.has(pair) && !uniquePairs.has(reversedPair)) {
      uniquePairs.add(pair);
      const words = pair.split(" ");
      const hasFourLetterWord = words.every((word) => {
        if (word.length < 5) return false;
        for (let i = 0; i <= word.length - 4; i++) {
          if (englishWords.includes(word.substring(i, i + 4))) {
            console.log(word.substring(i, i + 4));
            return true;
          }
        }
        return false;
      });
      if (hasFourLetterWord) {
        console.log(pair);
        count++;
      }
    }
  }
  return count;
};

export const levelSixteenLogic = (text) => {
  const { allWords } = getAllWords(text);
  let count = 0;
  const uniquePairs = new Set();

  for (let i = 0; i < allWords.length - 1; i++) {
    const pair = allWords[i] + " " + allWords[i + 1];
    const reversedPair = allWords[i + 1] + " " + allWords[i];
    if (!uniquePairs.has(pair) && !uniquePairs.has(reversedPair)) {
      uniquePairs.add(pair);
      const words = pair.split(" ");
      if (
        words[0].length >= 4 &&
        words[1].length >= 4 &&
        words[0].length === words[1].length
      ) {
        let isAlphabeticallyOrdered = true;
        for (let j = 0; j < words[0].length; j++) {
          if (words[0].charAt(j) >= words[1].charAt(j)) {
            isAlphabeticallyOrdered = false;
            break;
          }
        }
        if (isAlphabeticallyOrdered) {
          count++;
        }
      }
    }
  }
  return count;
};
