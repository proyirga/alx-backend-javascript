class HolbertonCourse {
  constructor(name, length, students) {
    this._setName(name);
    this._setLength(length);
    this._setStudents(students);
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

  // Getter and Setter for 'length'
  getLength() {
    return this._length;
  }

  _setLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  // Getter and Setter for 'students'
  getStudents() {
    return this._students;
  }

  _setStudents(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}

export default HolbertonCourse;
