'use strict'

const chai = require('chai')

chai.should()

const smartRound = require('..')

const cases = [
  { config: [6, 0, 6], shouldFormat: false, input: '1234.56789', output: '1234.57' },
  { config: [6, 0, 6], shouldFormat: true, input: '1234.56789', output: '1,234.57' },
  { config: [4, 2, 6], shouldFormat: true, input: '1234', output: '1,234.00' },
  { config: [4, 2, 6], shouldFormat: true, input: '0.000123987', output: '0.000124' }
]

describe('Round values', function () {
  cases.forEach(function ({ config, shouldFormat, input, output }) {
    it(`should return ${output} for ${input}`, function () {
      const rounder = smartRound(...config)
      rounder(input, shouldFormat).should.equal(output)
    })
  })
})
