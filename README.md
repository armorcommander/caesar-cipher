# Caesar cipher engine

The purpose of this coding challenge was to implement a Caesar cipher engine with the functionality as described on the [Wikipedia Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher) page. The application was to be implemented on NodeJS in Javascript. Unit testing was also a requirement, for which `Jest` was chosen.
### Current installation requirements

- node.js: 14.x
- npm: 6.14.11
- jest

Installation: 'npm' is recommended to install and build the packages.

#### The caesar-cipher repo has the following directory structure:

- root - Contains the caesar-cipher `app.js`
- src - Contains the code for the caesar-cipher functionality
- test - Contains the unit tests

#### Running locally
##### Installation
- Node.js and packages
  - Install node.js, which will also install npm for you
- Install application required packages
  - After cloning ‘caesar-cipher’ to your system, go into the root directory
  - Use npm to install all required packages
    - Execute: `npm install`

##### Executing the application
- From the command line, use this command:
  - `node app.js <phrase_to_encrypt> <encryption_offset>`

- Where:
  - `<phrase_to_encrypt>` - A string of less than 256 characters. Only alphabet letters (a-zA-Z) and spaces are allowed. The string must be enclosed by quotes.  Example: "This is a phrase to encrypt"
  - `<encryption_offset>` - An integer between -25 and 25.  Positive integers will do a right shift, negative a left shift.

#### Running Unit Tests

Unit tests have been written using Jest and code coverage statistics are gathered during the run

- To run the unit tests, ensure you are in the root directory
- From the command line
  - Execute: `npm run test`
- The unit tests will run and at the end will be a summary of results and code coverage
  - The number of unit tests passing wil be displayed
  - A table of code coverage statistics will be displayed
    - The statistics can provide good insight into where more testing is possibly needed

#### Unit Test Cases Covered
- Initial Inputs
  - Missing Encryption phrase
  - Missing Encryption offset
  - Additional arguments

- Encryption Phrase
  - String input missing
  - String has any invalid characters
  - Not an empty string
  - Longer than max length

- Encryption Offset
  - Input value missing
  - Not a number
  - Not between -20 and 20

- Individual Phrase Characters
  - Mixed lower and upper case
  - Invalid characters
  - Boundary cases where new character would wrap around
