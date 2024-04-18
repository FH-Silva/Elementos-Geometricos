var botao = document.getElementById("enviar");
botao.addEventListener("click", function(event){
    var raio = document.getElementById("raio").value;
    if(raio == ""){
        alert("Um dos formulários ou ambos os formulários estão vazios, digite novamente");
    }else{
        event.preventDefault();
        document.getElementById("saida").innerText = "Resultado: " + (raio**2 * Math.PI).toFixed(2);
    }
});