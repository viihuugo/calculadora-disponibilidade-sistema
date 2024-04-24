function calcularDisponibilidade(tempoTotal, tempoForaDoAr, unidadeTempoTotal, unidadeTempoForaDoAr) { 
    const horasPorUnidade = {
        'horas': 1,
        'dias': 24,
        'meses': 720, 
        'anos': 8760
    };

    const horasTotal = tempoTotal * horasPorUnidade[unidadeTempoTotal];
    const horasForaDoAr = tempoForaDoAr * horasPorUnidade[unidadeTempoForaDoAr];
    const tempoOperacional = horasTotal - horasForaDoAr;     
    const disponibilidade = (tempoOperacional / horasTotal) * 100;  

    return disponibilidade.toFixed(2); 
}  

function calcular() { 
    const tempoTotal = parseFloat(document.getElementById('tempoTotal').value); 
    const tempoForaDoAr = parseFloat(document.getElementById('tempoForaDoAr').value); 

    if (isNaN(tempoTotal) || isNaN(tempoForaDoAr)) {
        return; 
    }

    const unidadeTempoTotal = document.querySelector('.time-on.active').textContent.toLowerCase();
    const unidadeTempoForaDoAr = document.querySelector('.time-off.active').textContent.toLowerCase();
    const porcentagemDisponibilidade = calcularDisponibilidade(tempoTotal, tempoForaDoAr, unidadeTempoTotal, unidadeTempoForaDoAr); 
    document.getElementsByClassName('result--display')[0].style.display = 'flex';
    document.getElementById('resultado').innerText = porcentagemDisponibilidade + "%"; 
} 


function startAnimation() { 
    const contentSection = document.querySelector('.content');
    contentSection.style.display = 'flex';
    document.body.classList.add('start-anim');
}

function selectTimeOp(button) {
    const buttons = button.parentNode.querySelectorAll(".time--btn--selector");
                
    buttons.forEach(btn => {
        btn.classList.remove("active");
    });
    button.classList.add("active");
}

function selectTimeOff(button) {
    const buttons = button.parentNode.querySelectorAll(".time--btn--selector");
                
    buttons.forEach(btn => {
        btn.classList.remove("active");
    });
    button.classList.add("active");
}
