const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an engineer employee object including name, id, email, and github", () => {
            const obj = new Engineer();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("github" in obj).toEqual(true);
        });

        it("should return the given name, id, email, and github from the constructor", () => {
            const obj = new Engineer('45', 'Lyndsie', 'lyndsielane@yahoo.com', 'lyndsielane');

            expect(obj.getName()).toEqual('Lyndsie');
            expect(obj.getId()).toEqual('45');
            expect(obj.getEmail()).toEqual('lyndsielane@yahoo.com');
            expect(obj.getGithub()).toEqual('lyndsielane');
            expect(obj.getRole()).toEqual('Engineer');
        });
    });
});