export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Symbol
  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
