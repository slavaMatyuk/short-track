class Singleton {
  private static instance: Singleton;
  private constructor() {};
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
};

interface StringCustom extends String {
  customUpperCase(): string;
}

(String.prototype as StringCustom).customUpperCase = function() {
  return this.toUpperCase();
};

export default Singleton;