import Currency from './3-currency.js';

class Pricing {
  constructor(amount, currency) {
    this._setAmount(amount);
    this._setCurrency(currency);
  }

  getAmount() {
    return this._amount;
  }

  _setAmount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  getCurrency() {
    return this._currency;
  }

  _setCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency class');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.getName()} (${this._currency.getCode()})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}

export default Pricing;
