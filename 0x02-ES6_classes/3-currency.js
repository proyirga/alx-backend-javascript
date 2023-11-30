class Currency {
  constructor(code, name) {
    this._setCode(code);
    this._setName(name);
  }

  // Getter and Setter for 'code'
  getCode() {
    return this._code;
  }

  _setCode(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  // Getter and Setter for 'name'
  getName() {
    return this._name;
  }

  _setName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // Method to display full currency information
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
