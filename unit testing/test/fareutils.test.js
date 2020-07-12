const assert = require('assert')
const mocha = require('mocha')
const chai = require('chai')
const fareutils = require('../fareutils')

const expect = chai.expect

describe('fareutils', function () {

    it('expect fare to be 50 for 0km, 0 min', () => {
        let fare = fareutils.calcFare(0, 0)
        expect(fare).to.equal(50)
    })

    it()
})

