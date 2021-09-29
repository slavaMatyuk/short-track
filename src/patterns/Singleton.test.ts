import Singleton from './Singleton';

describe('Singleton:', () => {
  const o1 = new Singleton();
  const o2 = new Singleton();
  test('should return true when comparing two instances', () => {
    expect(o1 === o2).toBe(true);
    expect(o1 === o2).toBeTruthy();
  });
});

