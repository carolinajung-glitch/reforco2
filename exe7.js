function calcular (número1, número2, operacao){
    if (operacao == "+"){
       console.log("Seu resultado é: " , número1+número2)
    } else if (operacao == "-") {
        console.log("Seu resultado é: " , número1-número2)
    } else if (operacao == "*"){
         console.log("Seu resultado é: " , número1*número2)
    } else if (operacao == "/"){
        console.log("Seu resultado é: " , número1/número2)
    } else {
        console.log ("Operação Inválida.")
    }
};

calcular(3,5, "/")