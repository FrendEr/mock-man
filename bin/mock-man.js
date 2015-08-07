#!/usr/bin/env node

var os = require('os');

var program = require('commander');
var argv = require('yargs').argv;

process.stdin.setEncoding('utf-8');

/*
 * Set cmd rule via commander
 */
program
    .version('0.0.1')
    .option('-i, --ip', 'output ip address')
    .option('-a, --api <url>', 'output api url')
    .option('-p, --path <source>', 'output file path');

// --- sub command: start, via stdin && stdout --- //
// program
//     .command('start')
//     .description('start mockman')
//     .action(function() {
//         var api, path;
//
//         console.log('Input the api url:');
//         process.stdin.on('api', function(chunk) {
//             api = process.stdin.read();
//
//             if (api !== null) {
//                 console.log('Input the source path:');
//                 process.stdin.on('path', function(chunk) {
//                     path = process.stdin.read();
//
//                     if (api && path) {
//                         process.stdout.write('api: ' + api +
//                             '\n' +
//                             'path:' + path);
//                         process.stdin.exit();
//                     }
//                 });
//             }
//         });
//     });

program.parse(process.argv);

if (program.ip)
    console.log('ip地址为: %s', os.networkInterfaces().en0[1].address);

if (program.api)
    console.log('api: 调用的接口名为`' + program.api + '`');

if (program.path)
    console.log('path: mock数据的路径为`' + program.path + '`');

/*
 * Get cmd params via yargs
 */
if (argv.a)
    console.log(argv.a);

if (argv.p)
    console.log(argv.p);
