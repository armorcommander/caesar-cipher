const { charValidation }= require( './validators.js' );

/**
 *
 * @param {string} phrase
 * @param {number} offset
 * @returns
 */
const encryptPhrase = ( phrase, offset ) => {

    const phraseLength = phrase.length;
    var encryptedPhrase = '';

    var i;
    for ( i = 0; i < phraseLength; i++ ) {
        var phraseChar = charValidation( Number( phrase.charCodeAt( i ) ) );
        if ( phraseChar === 32 ) {
           encryptedPhrase = encryptedPhrase + " ";
        }
        else {
            let rawShiftedCharAsciiVal = Number( phraseChar + offset );

            let plusCheckShiftedCharAsciiVal =
                rawShiftedCharAsciiVal > 90
                    ? ( rawShiftedCharAsciiVal - 90 ) + 64
                    : rawShiftedCharAsciiVal;

            let minusCHeckShiftedCharAsciiVal =
                plusCheckShiftedCharAsciiVal < 65
                    ? 91 - ( 65 - plusCheckShiftedCharAsciiVal)
                    : plusCheckShiftedCharAsciiVal;

            encryptedPhrase = encryptedPhrase + String.fromCharCode( minusCHeckShiftedCharAsciiVal );
        }
    }
    return encryptedPhrase;
}

module.exports = encryptPhrase;
