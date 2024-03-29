export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  // Getter and setter for the element
  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  // If class extends, override
  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
