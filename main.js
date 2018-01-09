"use strict";

var SevdeskVoucherImporter = require("sevdesk-voucher-upload");

// parse command line options
const argToken = 'token';
const argFile = 'file';

let argv = require('yargs').strict()
    .usage("$0 [ --token SEVDESKTOKEN ] --file PDForIMAGEFILE")
    .option('t', {
        alias: argToken,
        describe: 'The sevDesk API Token to use. If missing, the SEVDESK_TOKEN environment variable will be used.',
        type: 'string'
    }).option('f', {
        alias: argFile,
        describe: 'Path to voucher/recipe file to import. The file is expected to be an image or PDF file.',
        type: 'string',
    }).argv;

// check parameters
let token = argv[argToken];
let file = argv[argFile];

// try to retrieve token from environment
if (!token)
    token = process.env.SEVDESK_TOKEN || '';

if (!token) {
    process.exitCode = 1;
    console.error("ERROR: Missing sevDesk API Token. Either specify the --token argument or set the SEVDESK_TOKEN environment variable.");
    return;
}

// check if the file was specified
if (!file) {
    process.exitCode = 1;
    console.error("ERROR: Missing --file argument.");
    return;
}

// perform the import
console.log(`Importing ${file} ...`);

try {    
    var importer = new SevdeskVoucherImporter(token);

    importer.importLocalFile(file)
    .then(() => {
        console.log(`Successfully imported ${file} as document ID ${importer.newDocumentId}`);
    })
    .catch(x => {
        process.exitCode = 1;
        console.error(`ERROR: Failed to import '${file}': ${x.message}`);
    });
} 
catch (x) {
    process.exitCode = 1;
    console.error(`ERROR: Failed to import '${file}': ${x.message}`);
}
