var moment = require('moment')

// Jan 1st 1970 00:00:00 am



// var date = new Date()
// var months = ['jan', 'feb']
// console.log(date.getMonth());


var createAt = 1234
var date = moment(createAt)
console.log(date.format('h:mm a'));
