function soma(){
    let soma = 0;
    let continuar = true;

    while (continuar){
        let numero = parseFloat(prompt("digite um número ( ou digite '0' para encerrar):"));
        
        if(!isNaN(numero)){
            soma+=numero;
        } else{
            alert("Por favor, digite um numero válido.");
        }
        continuar=confirm("Deseja adcionar mais um números?");
    }
    alert("A soma dos números é: " + soma);
}
