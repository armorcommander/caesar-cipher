const encryptPhrase = require( '../src/caesarEncryption.js' );

describe( 'Encryption Phrase Test', () => {

    const testPhraseGoodCase = "This is a good case";

    test.skip( 'Throws on missing encryption phrase and offset', () => {
        expect( () => {
            inputExists( testArgArrayNoPhrase );
        } ).toThrowError( /^Missing phrase to encrypt. Missing encryption offset.$/ );
    } );

    test( 'Passes with proper arguments', () => {
        expect( encryptPhrase( "This is a good case", 3 ) ).toBe('WKLV LV D JRRG FDVH');
    } );
} );
