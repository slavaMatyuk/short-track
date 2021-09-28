export {};

declare global {
  interface String {
    customUpperCase(): string;
  }
}

String.prototype.customUpperCase = function(this: string): string {
  return this.toUpperCase();
};
