import Order from './Order';

test('Não deve criar um pedido com o CPF inválido', function () {
    // const cpf = '111.111.111-11';
    const cpf = '39753740808';
    expect(() => new Order(cpf)).toThrow(new Error('Invalid CPF'))
});

// test('Deve criar um pedido com 3 itens', function () {
//     const cpf = '39753740808';
//     const order = new Order(cpf);
//     order.addItem('Guitarra', 1000, 1);
//     order.addItem('Amplificador', 5000, 1);
//     order.addItem('Cabo', 30, 2);
//     const total = order.getTotal();
//     expect(total).toBe(6600);
// })