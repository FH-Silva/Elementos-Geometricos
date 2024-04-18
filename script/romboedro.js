var botao = document.getElementById("enviar");
botao.addEventListener("click", function(event){
    var maior = document.getElementById("diaMaior").value;
    var menor = document.getElementById("diaMenor").value;
    
    if(maior == "" || menor == ""){
        alert("Um dos formulários ou ambos os formulários estão vazios, digite novamente");
    }else{
        event.preventDefault();
        document.getElementById("saida").innerText = "Resultado: " + maior * menor * 3;
    }
});