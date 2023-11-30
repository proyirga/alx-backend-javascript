class Building {
  constructor(sqft) {
    this._setSqft(sqft);
  }

  // Getter for 'sqft'
  getSqft() {
    return this._sqft;
  }

  _setSqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
  }

  // Abstract method that must be implemented by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

// Example of a class that extends Building and implements evacuationWarningMessage
class OfficeBuilding extends Building {
  constructor(sqft, officeType) {
    super(sqft);
    this._setOfficeType(officeType);
  }

  getOfficeType() {
    return this._officeType;
  }

  _setOfficeType(officeType) {
    if (typeof officeType !== 'string') {
      throw new TypeError('Office type must be a string');
    }
    this._officeType = officeType;
  }

  // Implementation of the abstract method
  evacuationWarningMessage() {
    return `Evacuate the ${this._officeType} office building!`;
  }
}

export default Building;
