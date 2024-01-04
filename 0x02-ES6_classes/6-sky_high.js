import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getter and setter
  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  // Override
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
