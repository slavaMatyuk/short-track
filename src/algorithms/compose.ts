const compose = (...fns: Array<any>) => (a: unknown) => fns.reverse().reduce((acc, fn) => fn(acc), a);

export default compose;