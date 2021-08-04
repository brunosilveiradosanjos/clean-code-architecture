const validatePedido = require('../js/pedido');

console.log(validatePedido.validatePedido({ description: 'GoPro Hero 5 Session', price: 1100, quantity: 1 }));
console.log(validatePedido.validatePedido({ description: 'Iphone X', price: "3200", quantity: 1 }));
console.log(validatePedido.validatePedido({ description: 'Iphone X', price: "3200", quantity: 1, someOther: 1 }));
console.log(validatePedido.validatePedido({ description: 10, price: "10", quantity: "2" }));
console.log(validatePedido.validatePedido(undefined));
console.log(validatePedido.validatePedido(null));
console.log(validatePedido.validatePedido(""));