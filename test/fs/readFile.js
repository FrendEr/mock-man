var fs = require('fs');
var path = require(path);

// fs.readFile('./data/user.json', function(err, data) {
//     if (err) {
//         console.log(err);
//     }
// });

path.exists('user.json', function(flag) {
    console.log(flag);
});
