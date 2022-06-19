
describe('verify the functionality of hooks', function () {


    before(function () {
        cy.log('Before everything...I am before block')
    })

    beforeEach(function () {
        cy.log('before every test case...I am beforeEach block')
    })

    it('verify the testCase one', function () {
        cy.log('I am testCase one')
    })

    afterEach(function () {
        cy.log('after every test case..I am afterEach block')
    })

    beforeEach(function () {
        cy.log('before every test case...I am beforeEach block')
    })

    it('verify the testCase two', function () {
        cy.log('I am testCase two')
    })

    afterEach(function () {
        cy.log('after every test case..I am afterEach block')
    })

    after(function () {
        cy.log('after afterEach ..I am after block')
    })

})