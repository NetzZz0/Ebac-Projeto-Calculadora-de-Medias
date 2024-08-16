const form = document.getElementById('form-atv');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Aprovado" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Reprovado" />';
const atividades = [];
const notas = [];
const spamAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spamReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinina = parseFloat(prompt("digite a nota mínima"))


let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    ///Capturando Nome e Nota 
    const inputNomeAtv = document.getElementById('nome-atv');
    const inputNotaAtv = document.getElementById('nota-atv');

    if (atividades.includes(inputNomeAtv.value)) {
        alert(`A atividade: ${inputNomeAtv.value} já foi inserida`);
    } else {
        atividades.push(inputNomeAtv.value);
        notas.push(parseFloat(inputNotaAtv.value));

        ///Adicionando na tabela
        let linha = '<tr>';
        linha += `<td>${inputNomeAtv.value}</td>`;
        linha += `<td>${inputNotaAtv.value}</td>`;
        linha += `<td>${inputNotaAtv.value >= notaMinina ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    ///Apaga os campos após submit
    inputNomeAtv.value = '';
    inputNotaAtv.value = '';
}

function atualizaTabela() {

    ///Envia para html

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {

    ///Adiciona a tabela

    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-finalValor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-finalResultado').innerHTML = mediaFinal >= notaMinina ? spamAprovado : spamReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    ///Soma as notas

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    ///Calcula média

    return somaDasNotas / notas.length;
}