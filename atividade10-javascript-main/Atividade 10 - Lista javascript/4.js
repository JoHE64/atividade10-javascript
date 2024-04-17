function ordem(){
    const numbers=[];
    for(let i = 1;i<=4 ; i++){
        numbers[i] = parseFloat(prompt("Digite o seu "+i+" numero:"));
    }
    numbers.sort();
    numbers.reverse();
    alert("Os números em ordem decrescente: "+numbers)
}