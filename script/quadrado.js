const botao = document.getElementById("enviar");
botao.addEventListener("click", calculadora);
function calculadora (event){
    event.preventDefault(); //Para de atualizar automaticamente
    let lados = document.getElementById("ladoQuadrado").value;
    document.getElementById("saida").innerText = "Resultado: " + lados * lados; //Faz o calculo e exibe
};