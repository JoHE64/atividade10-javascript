function picole(){
    let picoles= [['Chocolate',4.00],['Morango' , 2.50],['Creme' , 2.50],['Manga' , 3.20],['Melancia' , 3.40],['Vanilla Ice' , 3.00],['Céu Azul', 3.60],['Brownie' , 4.00],['Hawaiano' , 5.00]];
    let i = 0;
    let opcao = "";

    for(i = 0; i < picoles.length; i++){
        console.log(picoles[i][0] + ": " + picoles[i][1]);
    }

    opcao = prompt("Informe o sabor de sua escolha:");

    for(i = 0; i < picoles.length; i++){
        if(opcao === picoles [i][0]){
            console.log('O picole de sabor ' + picoles[i][0] +' custa R$' + picoles[i][1]);
            alert('O picole de sabor ' + picoles[i][0] +' custa R$' + picoles[i][1]);
        }
    }
}