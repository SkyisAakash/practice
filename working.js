function findViolations(dataFeed) {
    let register = {}
    let maxInvoiceId = 0;
    const nameRegEx = /[\w]+/;
    const actionRegEx = /\s[\w]+/;
    const digitRegEx = /[0-9]+(,\s[0-9]+)*/;
    let ans = [];
    dataFeed.forEach((entry, i) => {
        // debugger
        let name = nameRegEx.exec(entry)[0]
        let action = actionRegEx.exec(entry)[0].slice(1)
        if (action === "START") {
            register[name] = { line: i + 1, submissionLine: null, max: maxInvoiceId, invoiceId: 0 }
        } else {
            let digits = digitRegEx.exec(entry, 'm')[0].split(", ")
            console.log(digits);
            digits.forEach((digit) => {
                let invoice = parseInt(digit)
            })
            // let invoice = parseInt(action)
            // if (invoice >= register[name].max) {
            //     if (invoice > maxInvoiceId) maxInvoiceId = invoice;
            //     delete register[name]
            // } else {
            //     ans.push(`${register[name].line};${name};SHORTENED_JOB`)
            // }
        }
    })
    return ans;
}

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

console.log(findViolations(dataFeed4));