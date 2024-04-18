var botao = document.getElementById("enviar");
botao.addEventListener("click", function (event){
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    if(base == "" || altura == ""){
        alert("Um dos formulários ou ambos os formulários estão vazios, digite novamente");
    }else{
        event.preventDefault();
        document.getElementById("saida").innerText = "Resultado: " + base * altura / 2;
    }
});