document.getElementById('somaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // Validação
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    const resultado = num1 + num2;

    // Atualiza o resultado
    document.getElementById('resultado').textContent = resultado;

    // Atualiza o histórico
    const historico = document.getElementById('historico');
    const li = document.createElement('li');
    li.textContent = `${num1} + ${num2} = ${resultado}`;
    historico.appendChild(li);

    // Limpar os campos
    document.getElementById('somaForm').reset();
});
