class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Methods
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    // * `getRole()`&mdash;returns `'Employee'`
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;

