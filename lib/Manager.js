const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Manager"
    }
    getSchool() {
        return this.school
    }
}

module.exports = Manager;