describe('calculateTaxes tests', function() {

    it('should calculate high tax bracket', function () {
        expect(calculateTaxes(50000)).toEqual(12500);
        expect(calculateTaxes(100000)).toEqual(25000);
    })
    
    it('should calculate low tax bracket', function () {
        expect(calculateTaxes(10000)).toEqual(1500);
        expect(calculateTaxes(30000)).toEqual(4500);
        expect(calculateTaxes(30000)).toEqual(4500);
        expect(calculateTaxes(0)).toEqual(0);
    })
    
    it('should reject invalid incomes', function () {
        expect(() => calculateTaxes('banana')).toThrowError();
        expect(() => calculateTaxes([])).toThrowError();
        expect(() => calculateTaxes(true)).toThrowError();
    })
})

describe('removeDupes tests', function() {

    it('should remove duplicates from an array', function () {
        expect(removeDupes([1,1,2,2,3,4,4])).toEqual([1,2,3,4]);
        expect(removeDupes([1,2,3,4])).toEqual([1,2,3,4]);
        expect(removeDupes([1,2,3,4])).toBeInstanceOf(Array);
    })
    
    it('should remove duplicates from a string', function () {
        expect(removeDupes('hello')).toEqual('helo');
        expect(removeDupes('hello')).toBeInstanceOf(String);
    })
})

describe('remove (arr.filter) test', function(){

    it('should remove value from array', function() {
        expect(remove([1,2,3,4,5,6], 6)).not.toContain(6);
    })
})

describe('submitForm() tests', () => {
    it('saves input val to array', () => {
        input.value = 'chisdf fdsgcksdfg sfgsdfg';
        submitForm();
        expect(usernames.length).toBe(1);
    })
})

afterEach( () => {
    console.log('after each')
    input.value = '';
    usernames = [];
})

beforeEach( function() {
    console.log('before each')
})

beforeAll( function() {
    console.log('before all')
})

afterAll( function() {
    console.log('after all')
})