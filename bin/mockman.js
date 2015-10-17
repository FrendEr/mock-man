#!/usr/bin/env node

var os = require('os');
var fs = require('fs');
var path = require('path');

var program = require('commander');
var argv = require('yargs').argv;
var express = require('express');
var open = require('open');
var colors = require('colors');

console.log('\n  =============='.bold);
console.log('  |  ' + 'Mock Man'.america.bold + '  |');
console.log('  ==============\n'.bold);

/* ==========================
 * Set cmd rule via commander
 * ==========================
 */
program
    .version('Version: @0.0.6')
    .option('-i, --ip', 'output ip address')
    .option('-a, --api <api url>', 'set api url')
    .option('-p, --path <source path>', 'set file path')
    .option('-P, --port <default 3000>', 'set port, default 3000')
    .option('-v, --visable', 'show response on browser')
    .parse(process.argv);

program.ip   && console.log('  IP'.cyan + ' : ' + os.networkInterfaces().en0[1].address.bold);

program.api  && console.log(' API'.cyan + ' : ' + program.api.bold);

program.path && console.log(' URI'.cyan + ' : ' + path.resolve(process.cwd(), program.path).bold);

program.port && console.log('PORT'.cyan + ' : ' + program.port.bold);

(program.ip || program.api || program.path || program.port) && console.log('');

if (!process.argv.slice(2).length) {
    program.outputHelp();
    return;
}

/* ========================
 * Get cmd params via yargs
 * ========================
 */
if (argv.p) {
    if (argv.p.indexOf('.json') > -1) {
        fs.stat(path.resolve(process.cwd(), './mocker.json'), function(err, stats) {
            if (err) console.log('Error: not found mocker.json in your project root directory.\n'.red);

            fs.readFile(argv.p, function(err, data) {
                if (err) throw err;

                // init application
                var app = express();
                app.set('port', program.port || 3000)
                    .set('localhost', '127.0.0.1')
                    .set('protocol', 'http://');

                app.use(function(req, res) {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.send(JSON.parse(data));
                });

                // start server
                var server = require('http').createServer(app);
                server.listen(app.get('port'), function() {
                    console.log(colors.green('Server started, listening on port ') + colors.bold(app.get('port')));

                    if (argv.v) {
                        open(app.get('protocol') + app.get('localhost') + ':' + app.get('port'), function() {
                            console.log('The response datas has show on browser.'.green);
                        });
                    } else {
                        console.log(colors.green('You can visit the response datas on browser with ') + colors.bold(app.get('protocol') + app.get('localhost') + ':' + app.get('port')));
                    }
                    console.log('\nPress [ Ctrl + c ] to exit.'.gray);
                });
            });
        });
    } else {
        // just support json file
        return console.log('Error: import the datas file must be *.json file.\n'.red);
    }
}
