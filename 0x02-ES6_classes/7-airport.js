export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Symbol
  toString() {
    return `[object ${this.code}]`;
  }
}
