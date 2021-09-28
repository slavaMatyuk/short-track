import alphabetized from "./alphabetized";

describe('alphabetized:', () => {

  test('should sort by alphabet ignoring punctuations and return "BbeehHilloTy"', () => {
    expect(alphabetized('The Holy      Bible.')).toBe('BbeehHilloTy');
  });

  test('should sort by alphabet ignoring punctuations and return "eHllo"', () => {
    expect(alphabetized('Hello!!!!!!!!!!!!!!!!!!!!!!')).toBe('eHllo');
  });
});
