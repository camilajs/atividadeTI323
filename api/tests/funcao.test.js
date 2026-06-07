
const { calcularArea, calcularIMC, } = require('../src/funcao');

describe('Teste com valores corretos ', () => {

    test('Valores incorretos', () => {
        expect( () => calcularIMC(-1,10)).toThrow('Valor errado');
    });

    test('Valores corretos', () => { 
        expect(calcularIMC(64,1.60)).toBe(25);
    });

});