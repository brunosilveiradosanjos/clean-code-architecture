const validateCpf = require("./validateCpf_before");

console.log(validateCpf.validate("00000000000"));
console.log(validateCpf.validate("86446422799"));
console.log(validateCpf.validate("86446422784"));
console.log(validateCpf.validate("864.464.227-84"));
console.log(validateCpf.validate("91720489726"));
console.log(validateCpf.validate("a1720489726"));