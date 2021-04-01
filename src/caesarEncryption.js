export const encryptPhrase = ( phrase, offset ) => {

    // console.log( `Initial phrase: ${phrase}` );
    // console.log( `=========================================================\n\n` );

    const phraseLength = phrase.length;
    var encryptedPhrase = '';

    var i;
    for ( i = 0; i < phraseLength; i++ )
    {
        if ( Number( phrase.charCodeAt( i ) ) === 32 )
        {
           encryptedPhrase = encryptedPhrase + " ";
        }
        else
        {
            let rawShiftedCharAsciiVal = Number( phrase.charCodeAt( i ) + offset );
            // console.log( `\nrawShiftedCharAsciiVal: ${rawShiftedCharAsciiVal}` );

            let plusCheckShiftedCharAsciiVal =
                rawShiftedCharAsciiVal > 90
                    ? ( rawShiftedCharAsciiVal - 90 ) + 64
                    : rawShiftedCharAsciiVal;
            // console.log( `Plus Range checked plusCheckShiftedCharAsciiVal: ${plusCheckShiftedCharAsciiVal}` );

            let minusCHeckShiftedCharAsciiVal =
                plusCheckShiftedCharAsciiVal < 65
                    ? 91 - ( 65 - plusCheckShiftedCharAsciiVal)
                    : plusCheckShiftedCharAsciiVal;
            // console.log( `Minus Range checked minusCHeckShiftedCharAsciiVal: ${minusCHeckShiftedCharAsciiVal}` );
            // console.log( `minusCHeckShiftedCharAsciiVal: ${minusCHeckShiftedCharAsciiVal}` );

            encryptedPhrase = encryptedPhrase + String.fromCharCode( minusCHeckShiftedCharAsciiVal );
        }
    }
    return encryptedPhrase;
}
