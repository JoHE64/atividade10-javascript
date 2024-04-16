function letra(){
    let letra = "";
    let continuar = 1;

    alert("Digite uma letra, caso for uma vogal, vou te indicar, caso uma consoante vou avisar.");

    while(continuar){

        letra = prompt("Digite uma letra: ");

        if(isNaN(letra)){
            if((letra==="a") || (letra==="e") || (letra==="i") || (letra==="o") || (letra==="u")){
                alert("A letra fornecida é uma vogal.")
                continuar = 0;
            }else{
                alert("A letra fornecida é uma consoante.")
            }
            continuar = 0;
        }else{ 
            alert("Digite uma letra invalida!")
            continuar = 1;
        }
    }
}