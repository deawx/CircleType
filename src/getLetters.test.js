import getLetters from './getLetters';

describe('getLetters', () => {
  it('returns a span for each character', () => {
    const result = getLetters(' Mauris iaculis.   ').map(letter => letter.innerHTML);

    expect(result).toEqual([
      'M',
      'a',
      'u',
      'r',
      'i',
      's',
      '&nbsp;',
      'i',
      'a',
      'c',
      'u',
      'l',
      'i',
      's',
      '.'
    ]);
  });
});
