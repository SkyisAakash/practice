
/*
 * Complete the function below.
 */
function findViolations(datafeed) {
    let register = {};
    let maxInvoiceId = -1000;
    const nameRegEx = /[\w]+/;
    const actionRegEx = /\;[\w]+/;
    const digitRegEx = /-?[0-9]+(,-?[0-9]+)*/;
    let checkregex = [];
    let ans = [];
    datafeed.forEach((entry, i) => {
        let name = nameRegEx.exec(entry)[0]
        let action = actionRegEx.exec(entry)
        if (action) action = action[0].slice(1);
        if (action === "START") {
            if (register[name]) {
                register[name].unshift({
                    line: i + 1,
                    submissionLine: null,
                    max: maxInvoiceId,
                    invoiceId: 0
                })
            } else {
                register[name] = [{
                    line: i + 1,
                    submissionLine: null,
                    max: maxInvoiceId,
                    invoiceId: 0
                }]
            }
        } else {
            let digits = digitRegEx.exec(entry, 'm')[0].split(",")
            register[name].forEach((contract) => {
                if (digits.length === 1) {
                    invoice = parseInt(digits[0])
                    if (invoice >= contract.max) {
                        if (invoice > maxInvoiceId) maxInvoiceId = invoice;
                        register[name] = removeContract(register[name],
                            contract);
                    } else {
                        ans.push(`${contract.line};${name};SHORTENED_JOB`)
                    }
                } else {
                    for (let j = 0; j < digits.length; j++) {
                        invoice = parseInt(digits[j])
                        if (invoice >= contract.max) {
                            if (invoice > maxInvoiceId) maxInvoiceId = invoice;
                            register[name] = removeContract(register[name],
                                contract);
                        } else {
                            if (!ans.includes(`${i + 1};${name};SUSPICIOUS_BATCH`)) {
                                ans.push(`${i + 1};${name};SUSPICIOUS_BATCH`);
                            }
                        }
                    }
                }
            });
        }
    });
    return ans;
}

function removeContract(array, contract) {
    for (let i = 0; i < array.length; i++) {
        if (contract === array[i]) {
            array.splice(i, 1)
            break;
        }
    }
    return array;
}
