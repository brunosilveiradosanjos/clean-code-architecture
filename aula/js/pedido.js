function validateTypeOf(pedido) {
    if (typeof pedido == 'object' && pedido != null) return true
    return false
}

function validateItems(pedido) {
    if (typeof pedido['description'] != 'string') return false
    pedido['price'] = +pedido['price']
    pedido['quantity'] = +pedido['quantity']
    if (!pedido['price'] > 0) return false
    if (!pedido['quantity'] > 0) return false
    return true
}

function validatePedido(pedido) {
    if (!validateTypeOf(pedido)) return false
    if (!validateItems(pedido)) return false
    return true;
}

module.exports = {
    validatePedido
};