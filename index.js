const { inputValidation } = require( './src/validators.js' );
const encryptPhrase = require( './src/caesarEncryption.js' );

try {

    console.log();
    inputValidation( process.argv );

    const originalString = String(process.argv[2]);
    const encryptionOffset = Number(process.argv[3]);
    const workingString = originalString.toUpperCase();

    // console.log();
    // console.log(`----- Received Arguments ---------------------------------`);
    // console.log(`originalString: ${originalString}`);
    // console.log(`encryptionOffset: ${encryptionOffset}`);
    // console.log(`workingString: ${workingString}`)
    // console.log(`---------------------------------------------------------\n`);

    const encryptedPhrase = encryptPhrase( workingString, encryptionOffset );

    console.log(`\nInitial Phrase:   ${workingString}`);
    console.log(`Encrypted Phrase: ${encryptedPhrase}`);
}
catch (err) {
    console.error(`[${err.name}] ${err.message}`);
}
