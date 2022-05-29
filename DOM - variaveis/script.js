//SINTAXE BÁSICA

var fruh = "foobar";

//Comentários

//comentário de uma linha

/* isto é um comentário longo
de múltiplas linhas
*/

//DECLARANDO VARIAVEIS

var x = 42
let y = 13

//CLASSIFICANDO VARIAVEIS

var a;
console.log("O valor de a é : " + a);
//Saída do valor é undefined
console.log("O valor de b é : " + b);
//Executa uma exeption de erro de referência (ReferenceError)

var input;
if(input === undefined){
    facaIsto();
}
else{
    facaAquilo
}
/*O valor undefined se comporta como falso (false), quando usado em um contexto booleano. */

var myArray = [];
if(!myArray[0]) myFunction();

var n = null;
console.log(n*32); // a saída para o console será 0

//ESCOPOS DE VARIAVEIS
if (true) {
    var x = 5;
  }
console.log(x);  // 5
if (true) {
    let y = 5;
  }
  console.log(y);  // ReferenceError: y não está definido
/**
 * Exemplo 1
 */
 console.log(x === undefined); // exibe "true"
 var x = 3;
 
 /**
  * Exemplo 2
  */
 // retornará um valor undefined
 var myvar = "my value";
 
 (function() {
   console.log(myvar); // undefined
   var myvar = "local value";
 })();
 

 /**
  * Exemplo 1
  */
 var x;
 console.log(x === undefined); // exibe "true"
 x = 3;
 
 /**
  * Exemplo 2
  */
 var myvar = "um valor";
 
 (function() {
   var myvar;
   console.log(myvar); // undefined
   myvar = "valor local";
 })();
 
 //CONSTANTES SÃO PARA VALORES QUE NÃO SE MODIFICAM

 const PI = 3.14;
//PI é uma constante

// Isto irá causar um  erro
function f() {};
const f = 5;

// Isto também irá causar um erro.
/*function f() {
  const g = 5;
  var g;*/

  //declarações


//CONVERSÃO DE VALORES

var answer = 42;
answer = "Obrigado pelos peixes"

x = "A resposta é : " + 42
y = 42 + "e a resposta"

// CONVERTENDO STRINGS PARA NUMEROS

//parseInt
//parseFloat

//"1.1" + "1.1" = "1.11.1"
//(+"1.1") + (+"1.1") = 2.2;

// Nota: Os parênteses foram usados para deixar mais legível o código, ele não é requirido.

//ARRAY LITERAL

var coffees = ["French Roast", "Colombian", "Kona"];

var fish = ["Lion", , "Angel"];

//Esse array tem dois elementos com valores e um elemento vazio (fish[0] é "Lion", fish[1] é undefined, e fish[2] é "Angel" )

//OBJETO LITERAL

var vendas = "Toyota";

function tipoCarro(nome) {
  if (nome == "Fiat") {
    return nome;
  } else {
    return "Desculpa, não vendemos carros " + nome + ".";
  }
}

var carro = { meuCarro: "Punto", getCarro: tipoCarro("Fiat"), especial: vendas };

console.log(carro.meuCarro);   // Punto
console.log(carro.getCarro);  // Fiat
console.log(carro.especial); // Toyota

var carro = { carros: {a: "Saab", "b": "Jeep"}, 7: "Mazda" };

console.log(carro.carros.b); // Jeep
console.log(carro[7]); // Mazda

var foo = {a: "alpha", 2: "two"};
console.log(foo.a);    // alpha
console.log(foo[2]);   // two
//console.log(foo.2);  // Error: missing ) after argument list
//console.log(foo[a]); // Error: a não está definido
console.log(foo["a"]); // alpha
console.log(foo["2"]); // two

console.log("John's cat".length)
// Irá exibir a quantidade de caracteres na string incluindo o espaço em branco.
// Nesse caso, 10 caracteres.

