document.getElementById('submit').addEventListener('click', function() {
    let score = 0;
    const respostasCorretas = ['b', 'd', 'c', 'b', 'a', 'a', 'a']; 
    
    for (let i = 1; i <= respostasCorretas.length; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer) {
            if (selectedAnswer.value === respostasCorretas[i - 1]) {
                score++;
            }
        }
    }

    document.getElementById('resultado').innerText = `Você acertou ${score} de ${respostasCorretas.length} perguntas.`;

    document.getElementById('respostas').innerHTML = "<h3>Respostas corretas:</h3>";
    for (let i = 0; i < respostasCorretas.length; i++) {
        document.getElementById('respostas').innerHTML += `<p>Pergunta ${i + 1}: ${respostasCorretas[i]}</p>`;
    }
});
