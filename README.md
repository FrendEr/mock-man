# Mock Man

What is mock-man about? *It is just a node server to response data from local file, ie user.json, then you don't need hard coding in your static files.*

## Installation

```javascript

npm install mock-man -g

```

## How to use

- **mockman -h**

> get help information.

```javascript

mockman -h

______________________________________________________
                                                     |
                 help information                    |
                                                     |
______________________________________________________
                                                     |
Usage: mockman [options]                             |
                                                     |
  Options:                                           |
                                                     |
    -h, --help           output usage information    |
    -V, --version        output the version number   |
    -i, --ip             output ip address           |
    -a, --api <url>      set api url                 |
    -p, --path <source>  set file path               |
    -P, --port [3000]    set port, default 3000      |
    -v, --visable        show response on browser    |
                                                     |
______________________________________________________

```

- **mockman --ip**

> get local ip address

```javascript

mockman --ip

______________________________________________________
                                                     |
               ip address message                    |
                                                     |
______________________________________________________
                                                     |
  IP : 192.168.0.1                                   |
                                                     |
______________________________________________________

```

- **mockman -p ./data/user.json -P 8080 -v**

> start a server on port 8080, read local file `./data/user.json` and show on the browser.

```javascript

mockman -p ./data/user.json -P 8080 -v

_________________________________________________________________________
                                                                        |
               server start message                                     |
                                                                        |
_________________________________________________________________________
                                                                        |
 URI : /Users/frend/data/users.json                                     |
PORT : 8080                                                             |
                                                                        |
Server started, listening on port 9090                                  |
You can visit the response datas on browser with http://127.0.0.1:9090  |
                                                                        |
_________________________________________________________________________

```

## Version

- **v.0.0.3**
