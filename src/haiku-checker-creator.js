import { haikuRules }  from './constants';

export default class Haiku {
  constructor (text) {
    this.text = text;
  }

  haikuCheck() {  
    let errors = [];
    this.text.forEach((line, index) => {
        let count = this.countSyllables(line.toLowerCase());

        if (count !== haikuRules[index].count) {
          errors.push(`${haikuRules[index].error} but has ${count}`);
        }
    });

    return errors;
  }

  countSyllables(currentLine) {
    return currentLine.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
      .replace(/^y/, '')
      .match(/[aeiouy]{1,2}/g).length;
  }
}