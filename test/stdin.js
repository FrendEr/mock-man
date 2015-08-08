process.stdin.setEncoding('utf8');

console.log('Please input your api:');

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write('api: ' + chunk);
  }
});

process.stdin.on('end', function() {
  process.stdout.write('end');
});


var a = 1
(function() {
    console.log(1)
})
var b = 2
