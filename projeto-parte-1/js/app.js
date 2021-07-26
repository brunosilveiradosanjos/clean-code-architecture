const cpfButton = document.getElementById('cpf-submit');
let cpfValid = document.getElementById('is-valid-cpf')
let validCpf = false;

function getInputValue() {
    validCpf = false;
    validCpf = validateCpf(document.getElementById('cpf-value').value)
    console.log(validCpf)
}

if (validCpf) {
    const cpfP = document.createElement('p')
    console.log(cpfP)
    // cpfP.textContent = cpfValid
}

