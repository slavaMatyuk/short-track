import compose from './compose';

describe('compose:', () => {

  test('should take callbacks as arguments and return a function that takes one argument which must be taken by each of callbacks: "compose = (f, g, h) => (a) => f(g(h(a)))"', () => {
    const a = 'Innow';
    const f = (str: string) => str + 'e';
    const g = (str: string) => str + 's';
    const h = (str: string) => str + 'i';
    expect(compose(f, g, h)(a)).toEqual('Innowise');
  });
});
