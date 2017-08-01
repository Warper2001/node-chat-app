var expect = require('expect')
var {generateMessage} = require('./message')


describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'me'
    var text = 'test'
    var result = generateMessage(from, text)
    expect(result.from).toBe('me')
    expect(result.text).toBe('test')
    expect(result.createdAt).toBeA('number')
    // expect(result).toInclude({from, text})

  })
})
