const validateCpf = require("../js/cpf");

console.log(validateCpf.validateCpf("00000000000"));
console.log(validateCpf.validateCpf("86446422799"));
console.log(validateCpf.validateCpf("86446422784"));
console.log(validateCpf.validateCpf("864.464.227-84"));
console.log(validateCpf.validateCpf("91720489726"));
console.log(validateCpf.validateCpf("a1720489726"));