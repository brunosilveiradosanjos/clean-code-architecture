const cpfButton = document.getElementById('cpf-submit');
let validCpf = false;

function getInputValue() {
    validCpf = false;
    validCpf = validateCpf(document.getElementById('cpf-value').value)
    console.log(validCpf)
}

if (validCpf) {

}

