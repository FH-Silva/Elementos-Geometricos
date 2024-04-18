var botao = document.getElementById("enviar");
botao.addEventListener("click", function(event){
    var escolha = document.getElementById("escolha").value;
    var apotema = document.getElementById("apotema").value;
    var result;
    if(apotema !== ""){
    switch(escolha){
        case "pentagono":
            result = parseFloat(apotema);
            event.preventDefault();
            break;
        case "hexagono":
            alert("Ok");
            break;
        case "heptagono":
            alert("Ok");
            break;
        case "octagono":
            alert("Ok");
            break;
        case "eneagono":
            alert("Ok");
            break;
        case "decagono":
            alert("Ok");
            break;
        default:
            alert("Pane no sistema, alguém me desconfiguro :(");
    }
    document.getElementById("saida").innerText = "Resultado do " + escolha + " é: " + result;
    }else{
        alert("Um dos formulários ou todos os formulários estão vazios, digite novamente");
    }
});