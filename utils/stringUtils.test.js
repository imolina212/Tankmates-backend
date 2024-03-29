const {repeatNTimesWithSpace, capitalizeFirstLetter} = require('./stringUtils');

describe("take a string and number and repeat string same number of times, with spaces", () =>{

    it("handles an empty string", () =>{
        expect(repeatNTimesWithSpace('', 0)).toBe('');
        expect(repeatNTimesWithSpace('', 5)).toBe('');
    })

    it("handles an string with 1 or more characters", () =>{
        expect(repeatNTimesWithSpace('a', 1)).toBe('a');
        expect(repeatNTimesWithSpace('a', 5)).toBe('a a a a a');
        expect(repeatNTimesWithSpace('abc', 3)).toBe('abc abc abc');
    })

})

    describe("capitalizeFirstLetter()\ntake in a string, and return the string, with the first letter capitalized", () => {
        it("can capitalize the first letter of words", () => {
            expect(capitalizeFirstLetter("green")).toBe("Green");
        })
            
        it("handles an empty string", () => {
            expect(capitalizeFirstLetter("")).toBe("");
        })
        
        it("handles strings with 1 character", () => {
            expect(capitalizeFirstLetter("a")).toBe("A");
        })

    })