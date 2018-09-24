function findViolations(dataFeed) {
    let register = {}
    let maxInvoiceId = 0;
    const nameRegEx = /[\w]+/;
    const actionRegEx = /\s[\w]+/;
    const digitRegEx = /-?[0-9]+(,\s-?[0-9]+)*/;
    let ans = [];
    dataFeed.forEach((entry, i) => {
        debugger
        let name = nameRegEx.exec(entry)[0]
        let action = actionRegEx.exec(entry
            if(action) action  = action[0].slice(1)
        if (action === "START") {
            if (register[name]) {
                register[name].unshift({ line: i + 1, submissionLine: null, max: maxInvoiceId, invoiceId: 0 })
            } else {
                register[name] = [{line: i+1,submissionLine: null, max: maxInvoiceId, invoiceId: 0 }]
            }
        } else {
            debugger
            let digits = digitRegEx.exec(entry, 'm')[0].split(", ")
            register[name].forEach((contract) => {
                if (digits.length === 1) {
                    invoice = parseInt(digits[0])
                    if (invoice >= contract.max) {
                        if (invoice > maxInvoiceId) maxInvoiceId = invoice;
                        register[name] = removeContract(register[name], contract)
                    } else {
                        ans.push(`${contract.line};${name};SHORTENED_JOB`)
                    }
                } else {
                    for (let j = 0; j < digits.length; j++) {
                        invoice = parseInt(digits[j])
                        if (invoice >= contract.max) {
                            if (invoice > maxInvoiceId) maxInvoiceId = invoice;
                            register[name] = removeContract(register[name], contract)
                        } else {
                            ans.push(`${i + 1};${name};SUSPECIOUS_BATCH`);
                            break;
                        }
                    }
                }

            })
        }
    })
    return ans;
}

function removeContract(array, contract) {
    for (let i = 0; i < array.length; i++) {
        if (contract === array[i]) {
            array.splice(i, 1)
            break;
        }
    }
    return array
}

// console.log(removeContract([1,2,3],3))

const dataFeed1 = ["Tom; START",
"Jeremy; START",
"Dana; START",
"Jeremy; 4",
"Dana; 2",
"James; START",
"Leah; START",
"James; 5",
"Nick; START",
"Tom; 1",
"Nick; 6",
"Leah; 3"]

const dataFeed2 = ["Alice; START",
"Bob; START",
"Bob; 1",
"Carson; START",
"Alice; 15",
"Carson; 6",
"David; START",
"David; 24",
"Evil; START",
"Evil; 24",
"Evil; START",
"Evil; 18"]

const dataFeed3 = ["David; START",
"David; 24",
"Evil; START",
"Evil; 18"]

const dataFeed4 = ["Nick; START",
"Jeremy; START",
"Leah; START",
"Nick; 10",
"Jeremy; START",
"Jeremy; START",
"Leah; 15",
"Jeremy; 8, 14, 9"]

const dataFeed5 = [
    "Alice; START",
"Alice; 2",
"Alice; START",
"Alice; 1",
"Alice; START",
"Alice; 4",
"Alice; START",
"Bob; START",
"Bob; 4",
"Alice; 3"
]

const dataFeed6 = ["Jeremy; START",
"Jeremy; -5",
"Tom; START",
"Tom; -6"]

console.log(findViolations(dataFeed6));