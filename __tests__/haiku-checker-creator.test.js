import Haiku from '../src/haiku-checker-creator.js';

describe('Haiku', () => {
  
  let haiku;

  beforeEach(() => {
    haiku = new Haiku(['let the cat go eat', 'he only wants to eat fish', 'only stinky fish'])
  });

  test('should correctly verify that the poem has three lines with 5, 7, 5 syllables', () => {
    expect(haiku.haikuCheck()).toEqual([]);
  });

  test('should correctly determine whether the first line has 5 syllables or not', () => {
    expect(haiku.countSyllables(haiku.text[0])).toEqual(5);
  });

  test('should correctly determine whether the second line has 7 syllables or not', () => {
    expect(haiku.countSyllables(haiku.text[1])).toEqual(7);
  });

  test('should correctly determine whether the third line has 5 syllables or not', () => {
    expect(haiku.countSyllables(haiku.text[2])).toEqual(5);
  });
});