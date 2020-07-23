/** Textual markov chain generator */

const text = "the cat in the hat is in the hat";

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    const words = this.words;
    const chains = new Map();

    words.forEach((word, idx) => {
      let nextWord = words[idx + 1] || null;

      if (chains.has(word)) {
        chains.get(word).push(nextWord);
      } else {
        chains.set(word, [nextWord]);
      }
    });
    this.chains = chains;
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    console.log("Make TESSSST");
  }
}

module.exports = { MarkovMachine };
