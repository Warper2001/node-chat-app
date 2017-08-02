const expect = require('expect')
const {isRealString} = require('./validation')

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var str = 98
    var res = isRealString(str)
    expect(res).toBe(false)
  })
  it('should reject strings with only spaces', () => {
    var str = '     '
    var res = isRealString(str)
    expect(res).toBe(false)
  })
  it('should allow strings with non-space characters', () => {
    var str = '   fr   '
    var res = isRealString(str)
    expect(res).toBe(true)
  })
})
