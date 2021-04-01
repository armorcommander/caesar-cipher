/**
 *
 * @param {array} args
 * @returns
 */
const inputValidation = ( args ) => {
    inputExists( args );
    phraseSize( args[2] );
    offsetCheck( Number(args[3]) );
    return true;
}

/**
 *
 * @param {array} args
 * @returns
 */
const inputExists = ( args ) => {
    var errMsg;
    if ( args.length > 4 ) { errMsg = `Too many arguments, only require 2. Arg1: Phrase to encrypt, Arg2: Encryption Offset`; }
    if ( args.length < 4 ) { errMsg = `Missing encryption offset.`; }
    if ( args.length < 3 ) errMsg = `Missing phrase to encrypt.` + ` ` + errMsg;
    if ( errMsg !== undefined ) {
        const e = new Error();
        e.name=`ArgumentsError`;
        e.message=errMsg;
        throw e;
    }
    return true;
}

/**
 *
 * @param {string} phraseToCheck
 * @returns
 */
const phraseSize = ( phraseToCheck ) => {
    if ( phraseToCheck.length > 255 ) {
        const e = new Error();
        e.name=`PhraseError`;
        e.message=`Encryption phrase exceeds maximum length of 256 characters`;
        throw e;
    }
    return true;
}

/**
 *
 * @param {number} offset
 * @returns
 */
const offsetCheck = ( offset ) => {
    if ( !Number.isInteger(offset) || offset < -25 || offset > 25 ) {
        const e = new Error();
        e.name=`OffSetError`;
        e.message=`Encryption offset must be an integer between -25 and 25`;
        throw e;
    }
    return true;
}

/**
 *
 * @param {number} charAsciiValToCheck
 * @returns
 */
const charValidation = ( charAsciiValToCheck ) => {
    if ( charAsciiValToCheck === 32 ) return Number( charAsciiValToCheck );
    if ( charAsciiValToCheck < 65 || charAsciiValToCheck > 90 ) {
        const e = new Error();
        e.name=`PhraseError`;
        e.message=`Bad character found. Phrase must only contain letters of the alphabet (a-zA-Z) or spaces and be enclosed in quotes`;
        throw e;
    }
    return Number(charAsciiValToCheck);
}

module.exports = {
    inputValidation,
    inputExists,
    phraseSize,
    offsetCheck,
    charValidation
}
