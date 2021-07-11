const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an employee object including name, id, and email", () => {
            const obj = new Employee();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
        });

        it("should return the given name, id, and email from the constructor", () => {
            const obj = new Employee('45', 'Lyndsie', 'lyndsielane@yahoo.com');

            expect(obj.getName()).toEqual('Lyndsie');
            expect(obj.getId()).toEqual('45');
            expect(obj.getEmail()).toEqual('lyndsielane@yahoo.com');
            expect(obj.getRole()).toEqual('Employee');
        });
    });
});