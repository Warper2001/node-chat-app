var expect = require('expect')
var {generateMessage, generateLocationMessage} = require('./message')


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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'me'
    var latitude = 30
    var longitude = 20
    var url ='https://www.google.com/maps?q=30,20'
    var result = generateLocationMessage(from, latitude, longitude)
    expect(result.from).toBe('me')
    expect(result.url).toBe(url)
    expect(result.createdAt).toBeA('number')
  })
})
