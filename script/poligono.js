var botao = document.getElementById("enviar");
botao.addEventListener("click", function(event){
    var escolha = document.getElementById("escolha").value;
    var apotema = document.getElementById("apotema").value;
    var perimetro = document.getElementById("perimetro").value;
    var result;
    if(apotema !== "" && perimetro !== ""){
    switch(escolha){
        case "pentagono":
            result = 5 * parseFloat(perimetro) * parseFloat(apotema);
            break;
        case "hexagono":
            result = ((3 * parseFloat(perimetro))**2 * Math.sqrt(3)) / 2;
            break;
        case "heptagono":
            result = 7 * parseFloat(perimetro) * parseFloat(apotema) / 2;
            break;
        case "octagono":
            result = 4 * parseFloat(perimetro) * parseFloat(apotema);
            break;
        case "eneagono":
            result = 9 * parseFloat(perimetro) * parseFloat(apotema) / 2;
            break;
        case "decagono":
            result = 5 * parseFloat(perimetro) * parseFloat(apotema);
            break;
        default:
            alert("Pane no sistema, alguém me desconfiguro :(");
    }
    event.preventDefault();
    document.getElementById("saida").innerText = "Resultado do " + escolha + " é: " + result.toFixed(2);
    }else{
        alert("Um dos formulários ou todos os formulários estão vazios, digite novamente");
    }
});