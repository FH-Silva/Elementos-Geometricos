var calcular = document.getElementById("enviar");
calcular.addEventListener("click", calculadora);
function calculadora (event){
    var largura = document.getElementById("largura").value;
    var altura = document.getElementById("altura").value;
    if(largura == "" || altura == ""){
        alert("Um dos formulários ou ambos os formulários estão vazios, digite novamente");
    }else{
        event.preventDefault();
        var result = largura * altura;
        document.getElementById("saida").innerText = "Resultado: " + result;
    }
}