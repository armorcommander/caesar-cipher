const encryptPhrase = require( '../src/caesarEncryption.js' );

describe( 'Encryption Phrase Test', () => {

    const testPhraseBadCase = "This not a good case!";
    const testPhraseGoodCase = "This is a good case";
    const testPhraseBoundaryCase = "A boundary case at the zoo using a and z";
    const testPhraseDecryptCase = "D ERXQGDUB FDVH DW WKH CRR XVLQJ D DQG C";

    test( 'Throws on encryption phrase with non alphabet [a-zA-Z] characters', () => {
        expect( () => {
            encryptPhrase( testPhraseBadCase );
        } ).toThrowError( /^Bad character found. Phrase must only contain letters of the alphabet \(a-zA-Z\) or spaces and be enclosed in quotes$/ );
    } );

    test( 'Passes with encryption phrase with only alphabet [a-zA-Z] characters', () => {
        expect( encryptPhrase( testPhraseGoodCase.toUpperCase() , 3 ) ).toBe('WKLV LV D JRRG FDVH');
    } );

    test( 'Passes with encryption phrase including a and z boundary cases with left shift', () => {
        expect( encryptPhrase( testPhraseBoundaryCase.toUpperCase() , -3 ) ).toBe('X YLRKAXOV ZXPB XQ QEB WLL RPFKD X XKA W');
    } );

    test( 'Passes with encryption phrase including a and z boundary cases with right shift', () => {
        expect( encryptPhrase( testPhraseBoundaryCase.toUpperCase() , 3 ) ).toBe('D ERXQGDUB FDVH DW WKH CRR XVLQJ D DQG C');
    } );

    test( 'Successfully Decrypts previous test using a left shift', () => {
        expect( encryptPhrase( testPhraseDecryptCase.toUpperCase() , -3 ) ).toBe('A BOUNDARY CASE AT THE ZOO USING A AND Z');
    } );
} );
