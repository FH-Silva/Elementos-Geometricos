var botao = document.getElementById("enviar");
botao.addEventListener("click", function(event){
    var lado = document.getElementById("ladoCubo").value;
    if (lado == ""){
        alert("Um dos formulários ou ambos os formulários estão vazios, digite novamente");
    }else{
        event.preventDefault();
        document.getElementById("saida").innerText = "Resultado: " + lado ** 3;
    }
});