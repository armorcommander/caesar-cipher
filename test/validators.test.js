const { inputExists, phraseSize, offsetCheck, charValidation, inputValidation } = require( '../src/validators.js' );

describe( 'Encryption Input Arguments Test', () => {

    const testArgArrayNoPhrase = [ "node", "index.js" ]
    const testArgArrayNoOffset = ["node", "index.js", "Only encryption phrase"]
    const testArgArrayTooManyArgs = ["node", "index.js", "This is", "too", "many", "arguments"]
    const testArgArrayGoodCase = ["node", "index.js", "This is a good case", 3 ]

    test( 'Throws on missing encryption phrase and offset', () => {
        expect( () => {
            inputExists( testArgArrayNoPhrase );
        } ).toThrowError( /^Missing phrase to encrypt. Missing encryption offset.$/ );
    } );

    test( 'Throws on missing encryption offset', () => {
        expect( () => {
            inputExists( testArgArrayNoOffset );
        } ).toThrowError( /^Missing encryption offset.$/ );
    } );

    test( 'Throws on too many arguments', () => {
        expect( () => {
            inputExists( testArgArrayTooManyArgs );
        } ).toThrowError( /^Too many arguments, only require 2. Arg1: Phrase to encrypt, Arg2: Encryption Offset$/ );
    } );

    test( 'Passes with proper arguments', () => {
        expect( inputExists( testArgArrayGoodCase ) ).toBe( true );
    } );
} );

describe( 'Encryption Phrase', () => {

    const testPhraseTooLong = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

    test( 'Throws on encryption phrase too long', () => {
        expect( () => {
            phraseSize( testPhraseTooLong );
        }).toThrowError(/^Encryption phrase exceeds maximum length of 256 characters$/);
    } );

    test( 'Passes with proper length encryption phrase', () => {
        expect( phraseSize( "Lorem ipsum dolor sit amet" ) ).toBe( true );
    } );
} );

describe( 'Encryption Offset', () => {

    test( 'Throws if not a number', () => {
        expect( () => {
            offsetCheck( 'offset' );
        }).toThrowError(/^Encryption offset must be an integer between -25 and 25$/);
    } );

    test( 'Throws if out of range, less than -25', () => {
        expect( () => {
            offsetCheck( -26 );
        }).toThrowError(/^Encryption offset must be an integer between -25 and 25$/);
    } );

    test( 'Throws if out of range, greater than 25', () => {
        expect( () => {
            offsetCheck( 26 );
        }).toThrowError(/^Encryption offset must be an integer between -25 and 25$/);
    } );

    test( 'Passes with positive, in range encryption offset', () => {
        expect( offsetCheck( 3 ) ).toBe( true );
    } );

    test( 'Passes with negative, in range encryption offset', () => {
        expect( offsetCheck( -3 ) ).toBe( true );
    } );
} );

describe( 'Individual Encryption Phrase Ascii Character Test', () => {

    test( 'Throws if number (not alphabet [a-zA-Z])', () => {
        expect( () => {
            charValidation( 8 );
        }).toThrowError(/^Bad character found. Phrase must only contain letters of the alphabet \(a-zA-Z\) or spaces and be enclosed in quotes$/);
    } );

    test( 'Passes with Uppercase alphabet letter G', () => {
        expect( charValidation( 71 ) ).toBe( 71 );
    } );

    test( 'Passes with character space', () => {
        expect( charValidation( 32 ) ).toBe( 32 );
    } );
} );

describe( 'Comprehensive Input Validation', () => {


    const testArgArrayGoodCase = ["node", "index.js", "This is a good case", 3]

    test( 'Passes with proper arguments', () => {
        expect( inputValidation( testArgArrayGoodCase ) ).toBe( true );
    } );
} );
