import Singleton from './Singleton';

describe('Singleton:', () => {
  const o1 = Singleton.getInstance();
  const o2 = Singleton.getInstance();
  test('should return true when comparing two instances', () => {
    expect(o1 === o2).toBe(true);
    expect(o1 === o2).toBeTruthy();
  });
});

