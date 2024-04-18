var botao = document.getElementById("enviar");
botao.addEventListener("click", function (event){
    var maior = document.getElementById("baseMaior").value;
    var menor = document.getElementById("baseMenor").value;
    var altura = document.getElementById("altura").value;
    if(maior == "" || menor == "" || altura == ""){
        alert("Um dos formulários ou ambos os formulários estão vazios, digite novamente");
    }else{
        event.preventDefault();
        var maior = parseFloat(maior);
        var menor = parseFloat(menor);
        var result = (maior + menor) * altura / 2;
        document.getElementById("saida").innerText = result;
    }
});