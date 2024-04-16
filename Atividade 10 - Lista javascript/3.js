function balanco(){
    let bruto = 0;
    let gasto = 0;

    for ( let i = 1 ; i < 13 ; i++ ){
        let mesBruto = parseFloat(prompt("Digite o ganho do mês "+i+":"));
            if (!isNaN(mesBruto)){
                bruto+=mesBruto;
            }else {
                alert("Por Favor, Digite um número válido!");
            }
        
    }
    for ( let i = 1 ; i < 13 ; i++ ){
    let mesGasto = parseFloat(prompt("Digite o gasto do mês "+i+":"));
        if(!isNaN(mesGasto)){
            gasto+=mesGasto;
        }else {
            alert("Por favor, Digite um número válido!");
        }
    }
    alert("O ganho bruto da empresa no ano foi: "+bruto);
    alert("O gasto da empresa no ano foi: "+gasto);
    if(bruto>gasto){
        alert("A empresa teve um saldo positivo neste ano!");
    }else{
        alert("A empresa teve um saldo negativo neste ano!");
    }
}