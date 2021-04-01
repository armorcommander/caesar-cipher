import * as validators from "./validators.js";

try {

  // if(process.argv.length < 3) {
  //   throw new Error();
  validators.inputExists(process.argv);
  }

}
catch (err) {
  console.log(`err: ${err}`);
  errMsg;
}

const originalString = process.argv[2];
const encryptionOffset = Number(process.argv[3]);
const workingString = originalString.toLowerCase();

console.log(`----- Received Arguments ---------------------------------`);
console.log(`originalString: ${originalString}`);
console.log(`encryptionOffset: ${encryptionOffset}`);
console.log(`workingString: ${workingString}`)
console.log(`---------------------------------------------------------`);

console.log(`\n\nStep 1. Determining and listing Affected Projects`);
console.log(`=================================================================================`);
