#!/usr/bin/env node

var os = require('os');
var fs = require('fs');
var path = require('path');

var program = require('commander');
var argv = require('yargs').argv;
var express = require('express');
var open = require('open');

/* ==========================
 * Set cmd rule via commander
 * ==========================
 */
program
    .version('0.0.1')
    .option('-i, --ip', 'output ip address')
    .option('-a, --api <url>', 'set api url')
    .option('-p, --path <source>', 'set file path')
    .option('-P, --port [3000]', 'set port, default 3000')
    .option('-v, --visable', 'show response on browser');

program.parse(process.argv);

if (program.ip)
    console.log('ip: 当前的ip地址为 `%s`', os.networkInterfaces().en0[1].address);

if (program.api)
    console.log('api: 调用的接口名为 `%s`', program.api);

if (program.path)
    console.log('path: mock数据的路径为 `%s`', path.resolve(process.cwd(), program.path));

if (program.port)
    console.log('port: 服务端口为 `%s`', program.port);


/* ========================
 * Get cmd params via yargs
 * ========================
 */
if (argv.a)
    console.log(argv.a);

if (argv.p) {
    fs.readFile(argv.p, function(err, data) {
        if (err) throw err;

        var data = JSON.parse(data);
        var app = express();
        app.set('port', program.port || 3000).set('localhost',
            '127.0.0.1').set('protocol', 'http://');
        app.use(function(req, res) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.send(data);
        });

        var server = require('http').createServer(app);
        server.listen(app.get('port'), function() {
            console.log(
                'Server started, listening on port ' +
                app.get('port'));

            if (argv.v) {
                open(app.get('protocol') + app.get('localhost') +
                    ':' + app.get('port'),
                    function() {
                        console.log(
                            'The response datas has show on browser.'
                        );
                    });
            } else {
                console.log(
                    'You can visit the response datas on browser with %s%s:%s',
                    app.get('protocol'),
                    app.get('localhost'),
                    app.get('port'));
            }
        });
    });
}
