# sevDesk Voucher Upload Tool

**This tool is no longer actively maintained! Pleasee see https://github.com/tfohlmeister/sevdesk-voucher-uploader for an alternative!**

This tool provides an easy to use entrypoint to upload vouchers to a [sevDesk](http://www.sevdesk.de) account.

## Install

To install this tool perform the following call:

```sh
npm install -g sevdesk-voucher-upload-cli
```

The tool was developed using NodeJs v8.9.x LTS. It is supposed to be compatible with the latest LTS version.

## Quickstart

To import a PDF or image file, run the following command:

```sh
sevdesk-voucher-upload --token 012345sevdesktoken012345 --file ./examples/R1001.pdf
```

Optionally, the token can be retrieved from the *SEVDESK_TOKEN* environment variable.

## Usage

This is the current help output of the tool:

```
sevdesk-voucher-upload [ --token SEVDESKTOKEN ] --file PDForIMAGEFILE

Options:
  --help       Show help                                               [boolean]
  --version    Show version number                                     [boolean]
  -t, --token  The sevDesk API Token to use. If missing, the SEVDESK_TOKEN
               environment variable will be used.                       [string]
  -f, --file   Path to voucher/recipe file to import. The file is expected to be
               an image or PDF file.                                    [string]
```

## Known Issues

* none

## sevDesk API Token

The API token can be retrieved using the web interface. Best practice is to follow this process:

1) Create a new dedicated user for the API access.
2) Give the user admin rights (only then the API token will be shown in the web interface).
3) Login using the new API user
4) Retrieve the API Token vis *Settings > Users*: https://my.sevdesk.de/#/admin/userManagement
5) Set access rights to *Vouchers/Receipts*, only

## Debugging

The library uses the [debug](https://www.npmjs.com/package/debug) library for debug messages.

To enable debugging add "sevDesk:*" to the *DEBUG* environment variable.

## Authors

The tool is sponsored by the [marvin + konsorten GmbH](http://www.konsorten.de).

We thank all the authors who provided code to this tool:

* Felix Kollmann

## License

(The MIT License)

Copyright (c) 2017 marvin + konsorten GmbH (info@konsorten.de)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
