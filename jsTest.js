module.exports = customTest = (ip, op, successMsg, errorMsg) => {
    if(ip===op)console.log(successMsg)
    else console.log(errorMsg)
}