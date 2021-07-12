const { generateText, validateInput, createElement } = require('../util');
const fs = require("fs");
document.body.innerHTML = fs.readFileSync("./index.html");

describe('Pruebas de salida de datos', () => {
    test('Salida con datos', () => {
        const text = generateText('Daniel', 30);
        expect(text).toBe('Daniel (30 years old)');

        const text2 = generateText('Lucas', 25)
        expect(text2).toBe('Lucas (25 years old)');
    });
    
    it('Salida con datos vacíos', () => {
        const text = generateText('', null);
        expect(text).toBe(' (null years old)');
    });

    test('Salida sin datos', () => {
        const text = generateText();
        expect(text).toBe('undefined (undefined years old)');
    });
});

describe('Pruebas de creación de elementos', () => {
    test('Salida con datos', () => {
        const newElement = createElement('li','Daniel (30 years old)','user-item');
        const element = '<li class="user-item">Daniel (30 years old)</li>';
        expect(newElement.textContent).toMatch('Daniel (30 years old)');
    });
    test('Salida con HTML', () => {
        const newElement = createElement('li','Daniel (30 years old)','user-item');
        const element = '<li class="user-item">Daniel (30 years old)</li>';
        expect.objectContaining(`${newElement}`);
    });
});

describe('Pruebas de validación', () => {
    test('Salida con datos numéricos', () => {
        const text = validateInput('4', 4);
        expect(text).toBeFalsy;
    });
    test('Salida con datos vacíos', () => {
        const text = validateInput();
        expect(text).toBeFalsy;
    });
    test('Salida con espacios', () => {
        const text = validateInput(' ', ' ');
        expect(text).toBeFalsy;
    });
    test('Salida con un texto NaN', () => {
        const text = validateInput('4ea56 ', '4t');
        expect(text).toBeFalsy;
    });
    test('Salida con datos válidos', () => {
        const text2 = validateInput('Lucas', 25)
        expect(text2).toBeTruthy;
    });
})