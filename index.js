import * as validators from "./src/validators.js";
import * as encryption from "./src/caesarEncryption.js";

try {

    validators.inputExists(process.argv);

    const originalString = String(process.argv[2]);
    const encryptionOffset = Number(process.argv[3]);
    const workingString = originalString.toUpperCase();

    console.log(`----- Received Arguments ---------------------------------`);
    console.log(`originalString: ${originalString}`);
    console.log(`encryptionOffset: ${encryptionOffset}`);
    console.log(`workingString: ${workingString}`)
    console.log(`---------------------------------------------------------\n`);

    const encryptedPhrase = encryption.encryptPhrase( workingString, encryptionOffset );

    console.log(`Initial Phrase:   ${workingString}`);
    console.log(`Encrypted Phrase: ${encryptedPhrase}`);
}
catch (err) {
    console.error(`[${err.name}] ${err.message}`);
}
