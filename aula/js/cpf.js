CPF_DIVIDER = 11;
DIGIT_SIZE_1 = 9;
DIGIT_SIZE_2 = 10;

function checkLengh(cpf) {
    if (cpf == null || cpf == undefined) return false;
    return getOnlyDigits(cpf).length === 11 ? true : false;
}

function getOnlyDigits(cpf) {
    return cpf.replace(/\D/g, '')
}

function atLeastOneDifferentDigit(cpf) {
    const [digit1] = cpf;
    return !cpf.split("").every(digit => digit === digit1);
}

function calculateDigit(cpf, index, size) {
    let total = 0;
    [...cpf.toString().substr(0, size)].forEach(element => {
        total += parseInt(element) * index--;
    });
    const rest = (total) % CPF_DIVIDER
    return rest < 2 ? 0 : CPF_DIVIDER - rest;
}

function validateCpf(cpf) {
    if (!checkLengh(cpf)) return false;
    if (!atLeastOneDifferentDigit(cpf)) return false;
    cpf = getOnlyDigits(cpf);
    const digit = cpf.substr(-2, 2);
    const calculatedDigit = `${calculateDigit(cpf, 10, DIGIT_SIZE_1)}${calculateDigit(cpf, 11, DIGIT_SIZE_2)}`
    return digit == calculatedDigit;
}

module.exports = {
    validateCpf
};