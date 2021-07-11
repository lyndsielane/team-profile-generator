const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an intern employee object including name, id, email, and school", () => {
            const obj = new Intern();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("school" in obj).toEqual(true);
        });

        it("should return the given name, id, email, and school from the constructor", () => {
            const obj = new Intern('45', 'Lyndsie', 'lyndsielane@yahoo.com', 'GA Tech');

            expect(obj.getName()).toEqual('Lyndsie');
            expect(obj.getId()).toEqual('45');
            expect(obj.getEmail()).toEqual('lyndsielane@yahoo.com');
            expect(obj.getSchool()).toEqual('GA Tech');
            expect(obj.getRole()).toEqual('Intern');
        });
    });
});