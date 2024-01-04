import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and Setter for each attribute
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  // Method
  displayFullPrice() {
    return `${this._amount} ${new Currency(this._currency.code, this._currency._name).displayFullCurrency()}`;
  }

  // Static method
  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
