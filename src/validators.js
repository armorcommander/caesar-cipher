export const inputExists = (args) => {

    // console.log(`args.length: ${args.length}`);
    // console.log(`args[0]: ${args[0]}`);
    // console.log(`args[1]: ${args[1]}`);
    // console.log(`args[2]: ${args[2]}`);
    // console.log(`args[3]: ${args[3]}`);
    if (args.length < 4) {
        const e = new Error();
        e.name=`ArgumentsError`;
        e.message=`Missing arguments`;
        throw e;
    }
    console.log(`\n'inputExists' check passed\n`);
    return;
}

export const phraseValidation = (phraseToCheck) => {
    return true;
}
