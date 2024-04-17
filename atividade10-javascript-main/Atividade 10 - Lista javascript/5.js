function transform(){
    let i = 0;
    number = 0;

    number = parseFloat(prompt("Digite um número: "));

    alert("Se o seu número for impar,  vamos trasforma-lo em par e vice-versa.");

   if(number % 2 == 0){
    alert("O número fornecido é par. Vamos transforma-lo.")
    number = number + 1;
    alert("Adcionamos um número a mais, agora ele é impar: "+number);
   }else{
    alert("O número fornecido é impar. Vamos transforma-lo.")
   number = number + 1;
    alert("Adcionamos um número a mais, agora ele é par: "+number);
   }
}