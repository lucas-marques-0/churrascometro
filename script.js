// "antes da gente começar é importante que você saiba que sempre quando formos criar algum porgrama, foce precisa saber exatamentoe o que você quer que elçe faça... é isso que vamos ver nessa aula"
// regra de negócios/funcionamento para esse projeto:
// "precisamos calculcar a quantidade de comida e bebida para fazer um churrasco dependendo do núemwro de pessoas e da quantidade de adultos e crianças" =} abaixo esta o quanto as variáveis afetam a resposta (comidas necessárias)
// Carne - 400gr por pessoa (+6hrs = 650gr por pessoa) =} para todos.
// Cerveja - 1200ml por pessoa (+6hrs = 2000ml por pessoa) =} para os adultos.
// Refrigerante/Água - 1000ml por pessoa (+6hrs = 1500ml por pessoa) =} para as crianças (e outros).
// ----------------------------------------------------------------------------------------------------------------

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantidadeCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao)/2 * criancas);
    let quantidadeCervaja = cervejaPorPessoa(duracao) * adultos; // sem crianças pois nã bebem cerveja.
    let quantidadeBebida = bebidaPorPessoa(duracao) * adultos + (bebidaPorPessoa(duracao)/2 * criancas);

    if (adultos != "" && criancas != "" && duracao != ""){
        // nos resultados vamos converter de massa para quantidade dos produtos (fica mais prático).
        resultado.innerHTML = `<p>${String.fromCodePoint(0x1F969)} ${(quantidadeCarne/1000).toFixed(2)}Kg de carne <br><br>`; 
        //chegando aqui reseta (por isso "=" e ñ "+=").
        resultado.innerHTML += `<p>${String.fromCodePoint(0x1F37A)} ${Math.ceil(quantidadeCervaja/355)} latas de cerveja <br><br>`;
        resultado.innerHTML += `<p>${String.fromCodePoint(0x1F964)} ${Math.ceil(quantidadeBebida/2000)} garrafas de refrigerante`;
    }

    if (adultos == ""){
        alert(String.fromCodePoint(0x1F468) + " Por favor insira a quantidade de ADULTOS " + String.fromCodePoint(0x1F468))
    }

    if (criancas == ""){
        alert(String.fromCodePoint(0x1F9D2) + " Por favor insira a quantidade de CRIANÇAS " + String.fromCodePoint(0x1F9D2))
    }

    if (duracao == ""){
        alert(String.fromCodePoint(0x231A) + " Por favor insira a DURAÇÃO do churrasco " + String.fromCodePoint(0x231A))
    }
}

function carnePorPessoa(duracao){
    let carne = 400;
    if (duracao > 2 && duracao <= 4){
        carne = 485;
    }
    else if (duracao > 4 && duracao <= 6){
        carne = 570;
    }
    else if (duracao > 6 && duracao <= 8){
        carne = 655;
    }
    else if (duracao > 8 && duracao <= 10){
        carne = 740;
    }
    else if (duracao > 10){
        carne = 825;
    }
    return carne;
}

function cervejaPorPessoa(duracao){
    let cerveja = 1200;
    if (duracao > 2 && duracao <= 4){
        cerveja = 1470;
    }
    else if (duracao > 4 && duracao <= 6){
        cerveja = 1740;
    }
    else if (duracao > 6 && duracao <= 8){
        cerveja = 2010;
    }
    else if (duracao > 8 && duracao <= 10){
        cerveja = 2280;
    }
    else if (duracao > 10){
        cerveja = 2550;
    }
    return cerveja;
}

function bebidaPorPessoa(duracao){
    let bebida = 1200;
    if (duracao > 2 && duracao <= 4){
        bebida = 1470;
    }
    else if (duracao > 4 && duracao <= 6){
        bebida = 1740;
    }
    else if (duracao > 6 && duracao <= 8){
        bebida = 2010;
    }
    else if (duracao > 8 && duracao <= 10){
        bebida = 2280;
    }
    else if (duracao > 10){
        cerveja = 2550;
    }
    return bebida;
}

function mostrar(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    if (adultos != "" && criancas != "" && duracao != ""){
        document.getElementById("resultado").style.display = "block";
    }
}
