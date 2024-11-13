// Seleciona os elementos da página
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");
const somar = document.getElementById("somar");
const subtrair = document.getElementById("subtrair");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");
const calcular = document.getElementById("calcular");

// Variável para armazenar a operação selecionada
let operacaoSelecionada = "";

// Função para definir a operação selecionada
function selecionarOperacao(operacao) {
    operacaoSelecionada = operacao;
}

// Função para realizar a operação
function calcularOperacao() {
    // Obtém os valores numéricos dos inputs
    const valor1 = parseFloat(num1.value);
    const valor2 = parseFloat(num2.value);

    // Verifica se os valores são válidos
    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Declara a variável para armazenar o resultado
    let resultadoFinal;

    // Realiza a operação com base no botão selecionado
    switch (operacaoSelecionada) {
        case "somar":
            resultadoFinal = valor1 + valor2;
            break;
        case "subtrair":
            resultadoFinal = valor1 - valor2;
            break;
        case "multiplicar":
            resultadoFinal = valor1 * valor2;
            break;
        case "dividir":
            if (valor2 === 0) {
                alert("Divisão por zero não é permitida.");
                return;
            }
            resultadoFinal = valor1 / valor2;
            break;
        default:
            alert("Por favor, selecione uma operação.");
            return;
    }

    // Exibe o resultado no parágrafo e mostra-o na tela
    resultado.textContent = "Resultado: " + resultadoFinal;
}

// Adiciona ouvintes de evento para definir a operação
somar.addEventListener("click", function(event) {
    event.preventDefault();
    selecionarOperacao("somar");
});

subtrair.addEventListener("click", function(event) {
    event.preventDefault();
    selecionarOperacao("subtrair");
});

multiplicar.addEventListener("click", function(event) {
    event.preventDefault(); // previni a função padrão do botão, que é carregar a pagina quando clicado
    selecionarOperacao("multiplicar");
});

dividir.addEventListener("click", function(event) {
    event.preventDefault();
    selecionarOperacao("dividir");
});

// Evento para o botão "Calcular" que executa a operação e exibe o resultado
calcular.addEventListener("click", function(event) {
    event.preventDefault();
    calcularOperacao();
});
