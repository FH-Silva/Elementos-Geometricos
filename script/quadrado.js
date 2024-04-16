const botao = document.getElementById("enviar"); //Conexão
botao.addEventListener("click", calculadora); //Espera o evento
function calculadora (event){ //Função de quando o evento ocorrer
    event.preventDefault(); //Para de atualizar automaticamente
    let lados = document.getElementById("ladoQuadrado").value; //Pega o valor do forms
    document.getElementById("saida").innerHTML = lados * lados; //Faz o calculo e exibe
};