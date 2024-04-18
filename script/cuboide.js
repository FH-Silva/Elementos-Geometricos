var botao = document.getElementById("enviar");
botao.addEventListener("click", function(event){
    var largura = document.getElementById("largura").value;
    var altura = document.getElementById("altura").value;
    var comprimento = document.getElementById("comprimento").value;

    if(largura == "" || altura == "" || comprimento == ""){
        alert("Um dos formulários ou ambos os formulários estão vazios, digite novamente");
    }else{
        event.preventDefault();
        document.getElementById("saida").innerText = "Resultado: " + largura * altura * comprimento;
    }
});