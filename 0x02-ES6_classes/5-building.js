export default class Building {
  constructor(sdft) {
    this._sdft = sdft;
    this.evacuationWarningMessage();
  }

  // Getter and setter for the element
  get sdft() {
    return this._sdft;
  }

  set sdft(value) {
    this._sdft = value;
  }

  // If class extends, override
  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
