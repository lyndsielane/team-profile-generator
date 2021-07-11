const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return a manager employee object including name, id, email, and office number", () => {
            const obj = new Manager();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("officeNumber" in obj).toEqual(true);
        });

        it("should return the given name, id, email, and office number from the constructor", () => {
            const obj = new Manager('45', 'Lyndsie', 'lyndsielane@yahoo.com', '7');

            expect(obj.getName()).toEqual('Lyndsie');
            expect(obj.getId()).toEqual('45');
            expect(obj.getEmail()).toEqual('lyndsielane@yahoo.com');
            expect(obj.getOfficeNumber()).toEqual('7');
            expect(obj.getRole()).toEqual('Manager');
        });
    });
});