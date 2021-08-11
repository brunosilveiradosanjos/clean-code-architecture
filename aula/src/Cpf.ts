export default class Cpf {
    value: string;
    constructor(value: string) {
        // console.log(`this.validate(${value})`, this.validate(value));
        if (!this.validate(value)) throw new Error("Invalid CPF");
        this.value = value;
    }
    private CPF_DIVIDER = 11;
    private DIGIT_SIZE_1 = 9;
    private DIGIT_SIZE_2 = 10;

    checkLengh(cpf: string) {
        if (cpf == null || cpf == undefined) return false;
        return cpf.toString().length === 11 ? true : false;
    }

    getOnlyDigits(cpf: string) {
        return cpf.replace(/\D/g, '')
    }

    atLeastOneDifferentDigit(cpf: string) {
        const [digit1] = cpf;
        return !cpf.split("").every(digit => digit == digit1);
    }

    calculateDigit(cpf: string, index: number, size: number) {
        let total = 0;
        [...cpf.toString().substr(0, size)].forEach(element => {
            total += parseInt(element) * index--;
        });
        const rest = (total) % this.CPF_DIVIDER
        return rest < 2 ? 0 : this.CPF_DIVIDER - rest;
    }

    validate(cpf: string) {
        cpf = this.getOnlyDigits(cpf);
        if (!this.checkLengh(cpf)) return false;
        if (!this.atLeastOneDifferentDigit(cpf)) return false;
        const digit = cpf.substr(-2, 2);
        const calculatedDigit = `${this.calculateDigit(cpf, 10, this.DIGIT_SIZE_1)}${this.calculateDigit(cpf, 11, this.DIGIT_SIZE_2)}`
        return digit == calculatedDigit;
    }
}