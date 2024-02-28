// ERROR UNDEFINED 

// let nombre;
// alert(nombre)

//----------------------------------------------------

// Ejemplo 1 :  MOSTRAR UN NOMBRE EN JS

// let nombre;
// nombre = "Keiner";
// alert(nombre)

//-----------------------------------------------------

// Ejemplo 2 : SUMA DE DOS NUMEROS USANDO EL CONST

// const numero1 = 2;
// const numero2 = 10;
// suma = numero1 +numero2
// alert(suma)

//--------------------------------------------------------------

// Ejemplo 3 : SUMA DE DOS NUMEROS USANDO EL LET 

// let numero1 = 23 , numero2 = 10;
// suma = numero1 + numero2;
// alert(suma)

//--------------------------------------------------------------------

// FORMA DE MOSTRAR NUMEROS DESPUES DE DARLE ACEPTAR EN EL ALERT

// let numero1 = 23;
// let numero2 = 10;
// alert(numero1)
// alert(numero2)

//---------------------------------------------------------------

// MULTIPLICAR DOS NUMEROS
// DOS FORMAS DE HACERLO

// let numero1 = 50;
// let numero2 = 50;
// alert(numero1 * numero2) 


// let numero1 = 50;
// let numero2 = 50;
// multiplicaion = numero1 * numero2
// alert(multiplicaion) 

//-------------------------------------------------------

// TE MUESTRA LO QUE QUIERES VER

// let numero = 50;
// let numero2 = "pedro";

// alert(numero + numero2) 

// ERROR NAN 

// let numero = 50;
// let numero2 = "pedro";
// alert(numero * numero2) 

//-------------------------------------------------------

// DOS FORMAS DE PEDIR INFORMACION Y MOSTRAR EN PANTALLA

// let nombre = prompt("Escribe tu Nombre ")
// alert("¡Hola! " + nombre )

// let nombre = prompt("Escribe tu Nombre ")
// alert(nombre )

// -------------------------------------------------------

// OPERADORES ARITMETICOS Y EJEMPLO CON CADA UNO

// let numero1 = 10;
// let numero2 = 10;
// suma = numero1 +numero2
// alert(suma)

// let numero3 = 10;
// let numero4 = 2;
// resta = numero3 - numero4
// alert(resta)

// let numero5 = 2;
// let numero6 = 10;
// multiplicacion = numero5 * numero6
// alert(multiplicacion)

// let numero7 = 2;
// let numero8 = 10;
// division = numero7 / numero8
// alert(division)

//--------------------------------------------

// OPERADORES DE ASIGNACION  CON LOS DEMAS ES LO MSMO SOLO ES CAMBIAR EL SIGNO Y LISTO

// let numero = 10;
// numero += 5;
// document.write(numero)

// ES LO MISMO SI COLOCAMOS ESTO 

// numero = 10;
// numero = 10;
// numero = numero + 10
// document.write(numero)

// (numero --- o numero ++) LE QUITA UN NUMERO AL VALOR YA INICIALIZADO

// let numero1 = 10;
// let numero2 = 5;
// numero1--;
// resultado = numero1;
// alert(resultado)

// let numero3 = 10;
// let numero4 = 5;
// numero3--;
// numero4--;
// resultado = numero3;
// resultado2 = numero4;
// alert(resultado)
// alert(resultado2)

//---------------------------------------------------

// CONCATENACION CON EL SIGNO +

// let saludo = " Hola Keiner";
// let pregunta = " ¿Como estas?";

// frase = saludo + pregunta,
// document.write(frase)

// ----------------------------------------------

// FORZAR UN STRING

// let numero1 = "40";
// let numero2 = 7;
// resultado = numero1 + numero2;
// document.write(resultado)

// ------------------------------------------------------

// CONCAT ES UN METODO

// num1 = "53";
// num2 = 8;
// result = num1.concat(num2);
// document.write(result)

// -----------------------------------------------------

// ${} LLAVES

// FORMA NORMAL DE MOSTRAR UNA FRASE

// nom = "keiner";
// frase = " Soy " +nom+ " Y estoy programando";
// document.write(frase)

// USO DE LAS LLAVES 
// OJO : PARA QUE FUNCIONE DEBES USAR LOS BACKTIKS

// nom = "keiner";
// frase =  `Soy ${nom}  Y estoy programando`;
// document.write(frase)

// this es el objeto que se va a crear
// asi mostrara un object object porque efectivamente es un objeto
// con el console.log saldra lo que les muestro en la imagen 

// class animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//     }
// }

// let perro = new animal("perro",5,);

// // document.write(perro);
// console.log(perro);

// para arreglar lo anterior solo es hacer lo sgte 
// class animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//     }
// }

// let perro = new animal("perro",5,"rojo"); // aqui decimos que tipo 

// document.write(perro);
// console.log(perro);

// para acceder a las propiedades solo basta con  hacer lo sgte

// class animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;         
//     }
// }

// let perro = new animal("perro",5,"rojo"); // aqui decimos que tipo 

// document.write(perro.color);

// ahora vamos a mostrar informacion del perro 

// class animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años 
//         y soy de color ${this.color}`;
//     }
// }

// let perro = new animal("perro",5,"rojo"); // aqui decimos que tipo 

// document.write(perro.info);

// Ahora si yo quiero crear masanimales como se haria alli
// se haria lo sgte

// class animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años 
//         y soy de color ${this.color}`;
//     }
// }

// let perro = new animal("lobo siveriano",10,"blanco"); // aqui decimos que tipo 
// let gato= new animal("gato angola",7,"gris"); // aqui decimos que tipo 
// let pajaro = new animal("flamengo",10,"rosado"); // aqui decimos que tipo 

// document.write(perro.info + "<br>");
// document.write(gato.info + "<br>");
// document.write(pajaro.info + "<br>");

// ver informacion usando un metodo
// la funciones flecha o pueden usarse para crear metodos en una clase 
// no mostrara nada
// esto es para ahorrar tener que poner muchos document.write

// class animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años 
//         y soy de color ${this.color}`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>");
//     }
// }


// let perro = new animal("lobo siveriano",10,"blanco"); // aqui decimos que tipo 
// let gato= new animal("gato angola",7,"gris"); // aqui decimos que tipo 
// let pajaro = new animal("flamengo",10,"rosado"); // aqui decimos que tipo 

// // document.write(perro.info + "<br>");
// // document.write(gato.info + "<br>");
// // document.write(pajaro.info + "<br>");

// perro.verInfo();
// // gato.verInfo();
// pajaro.verInfo();

// uso del polimorfismo en JS
// tres objetos que tienen tres comportamientos diferentes 

// class animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años 
//         y soy de color ${this.color}`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>");
//     }
//     ladrar(){
//         if (this.especie == "perro"){
//             document.write("WAW  <br>")
//         }else{
//             document.write("No puede ladrar , ya que es un " + this.especie + "<br>")
//         }
//     }
// }


// let perro = new animal("perro",5,"marron"); // aqui decimos que tipo 
// let gato= new animal("gato ",2,"negro"); // aqui decimos que tipo 
// let pajaro = new animal("pajaro",1,"verde"); // aqui decimos que tipo 


// perro.ladrar();
// gato.ladrar();
// pajaro.ladrar();

// uso de la herencia en JS
// asi saldra un error 
// No se puede tener un objeto con el mismo nombre de la clase , porque si no sale un error en la consola

// class animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años 
//         y soy de color ${this.color}`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>");
//     }
// }
// class perro extends animal{
//     constructor(especie,edad,color,raza){ // esto hereda lo que contiene especie y edad en la clase animal
//         super(especie,edad,color,raza);
//         this.raza = raza;   
//     }
// }

// let perro = new animal("perro",5,"marron" ,"doberman"); // aqui decimos que tipo 
// let gato= new animal("gato ",2,"negro"); // aqui decimos que tipo 
// let pajaro = new animal("pajaro",1,"verde"); // aqui decimos que tipo 

// perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();

// para solucionarlo seria hacer lo sgte

// class Animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años 
//         y soy de color ${this.color}`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>");
//     }
// }
// class Perro extends Animal{
//     constructor(especie,edad,color,raza){ // esto hereda lo que contiene especie y edad en la clase animal
//         super(especie,edad,color,raza);
//         this.raza = raza;   
//     }
// }

// let perro = new Perro("perro",5,"marron" ,"doberman"); // aqui decimos que tipo 
// let gato= new Animal("gato ",2,"negro"); // aqui decimos que tipo 
// let pajaro = new Animal("pajaro",1,"verde"); // aqui decimos que tipo 

// perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();

// otra prueba
// asi mostrara el waw primero y luego lanzar un error ya que el gato no puede ladrar

// class Animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años 
//         y soy de color ${this.color}`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>");
//     }
// }
// class Perro extends Animal{
//     constructor(especie,edad,color,raza){ // esto hereda lo que contiene especie y edad en la clase animal
//         super(especie,edad,color,raza);
//         this.raza = raza;   
//     }
//     ladrar(){
//         alert("waw")
//     }
// }

// let perro = new Perro("perro",5,"marron" ,"doberman"); // aqui decimos que tipo 
// let gato= new Animal("gato ",2,"negro"); // aqui decimos que tipo 
// let pajaro = new Animal("pajaro",1,"verde"); // aqui decimos que tipo 

// perro.ladrar();
// gato.ladrar();
// pajaro.verInfo();

// METODOS ESTATICOS
// Mostrará el Waw al igual porque es un método estatico aún así el objeto perro no esté .

// class Animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años 
//         y soy de color ${this.color}`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>");
//     }
// }
// class Perro extends Animal{
//     constructor(especie,edad,color,raza){ // esto hereda lo que contiene especie y edad en la clase animal
//         super(especie,edad,color,raza);
//         this.raza = raza;   
//     }
//     static ladrar(){
//         alert("waw")
//     }
// }

// let gato= new Animal("gato ",2,"negro"); // aqui decimos que tipo 
// let pajaro = new Animal("pajaro",1,"verde"); // aqui decimos que tipo 

// Perro.ladrar();
// gato.ladrar();


// saldrá un error undefined ya que el objeto perro no existe osea no está definido . Existe la clase pero no el objeto .

// class Animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años 
//         y soy de color ${this.color}`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>");
//     }
// }
// class Perro extends Animal{
//     constructor(especie,edad,color,raza){ // esto hereda lo que contiene especie y edad en la clase animal
//         super(especie,edad,color,raza);
//         this.raza = raza;   
//     }
//     static ladrar(){
//         alert(this.especie); // saldrá un rato undefined ya que el objeto perro no existe osea no está definido . Existe la clase pero no el objeto .
//     }
// }

// let gato= new Animal("gato ",2,"negro"); // aqui decimos que tipo 
// let pajaro = new Animal("pajaro",1,"verde"); // aqui decimos que tipo 

// Perro.ladrar();
// gato.ladrar();


// como vemos el static no esta entonces por defecto no mostrara nada en el navegador

// class Animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años 
//         y soy de color ${this.color}`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>");
//     }
    
// }

// class Perro extends Animal{
//     constructor(especie,edad,color,raza){ // esto hereda lo que contiene especie y edad en la clase animal
//         super(especie,edad,color,raza);
//         this.raza = raza;   
//     }
//     ladrar(){
//         alert("waw")
//     }
// }

// let gato= new Animal("gato ",2,"negro"); // aqui decimos que tipo 
// let pajaro = new Animal("pajaro",1,"verde"); // aqui decimos que tipo 

// Perro.ladrar();
// gato.ladrar();

//  METODOS ACCESORES  ( Getters , Setters ) 
//  Mostrara keiner como resultado 
// USO DEL SETTERS

// class Animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años 
//         y soy de color ${this.color}`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>");
//     }
// }
// class Perro extends Animal{
//     constructor(especie,edad,color,raza){ // esto hereda lo que contiene especie y edad en la clase animal
//         super(especie,edad,color,raza);
//         this.raza = null;   
//     }
//     set setRaza(newName){
//            this.raza = newName;
//     }

// }

// const perro = new Perro ( " perro " , " 5 " , " marrón " , " doberman ");
// const gato= new Animal("gato ",2,"negro"); // aqui decimos que tipo 
// const pajaro = new Animal("pajaro",1,"verde"); // aqui decimos que tipo 

// perro.setRaza = " keiner ";
// document.write(perro.raza);

// USO DEL GETTERS
// mostrara el keiner tambienn como resultado

// class Animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años 
//         y soy de color ${this.color}`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>");
//     }
// }
// class Perro extends Animal{
//     constructor(especie,edad,color,raza){ // esto hereda lo que contiene especie y edad en la clase animal
//         super(especie,edad,color);
//         this.raza = null;   
//     }
//     set setRaza(newName){
//            this.raza = newName;
//     }
//     get getRaza(){
//         return this.raza;
//     }

// }

// const perro = new Perro ( " perro " , " 5 " , " marrón " , " doberman ");
// const gato= new Animal("gato ",2,"negro"); // aqui decimos que tipo 
// const pajaro = new Animal("pajaro",1,"verde"); // aqui decimos que tipo 

// perro.setRaza = " keiner ";
// document.write(perro.getRaza);

// METODOS DE CADENAS 

// USO DEL CONCAT

// let cadena = " cadena de prueba";
// let cadena2 = "cadena ";

// resultado =  cadena.concat("hola") ;

// document.write( resultado) ; 

// ejemplo #2 de concat

// let cadena = " cadena de prueba";
// let cadena2 = " cadena2";

// resultado = cadena.concat( cadena2);

// document.write( resultado);

// ejemplo #3 es lo mismo que hacer lo sgte

// let cadena = new string( " cadena de prueba " ) ; 
// let cadena2 = " cadena 2 ";

// resultado = cadena.concat( cadena2);

// document.write( resultado) ;


// USO DEL STARTSWITH
// ejemplo #1
// MUESTRA FALSE Porque cadena no empieza con cadena2

// let cadena = " cadena de prueba";
// let cadena2 = " cadena 2 ";

// resultado = cadena.startsWith( cadena2);

// document.write( resultado) ;

// ejemplo #2
// asi muestra el True porque cadena no tiene espacios

// let cadena = "cadena de prueba";
// let cadena2 = "cadena";

// resultado = cadena.startsWith(cadena2);

// document.write(resultado) ;

// USO DEL ENDWITH

// ejemplo #1

// mostrara false porque no termina con cadena

// let cadena = " cadena de prueba";
// let cadena2 = "cadena";

// resultado = cadena.endsWith( cadena2);

// document.write( resultado) ;


// ejemplo #2
// Asi sale True porque termina con la palabra prueba

// let cadena = " cadena de prueba";
// let cadena2 = "prueba";

// resultado = cadena.endsWith( cadena2);

// document.write( resultado) ;

// USO DEL INCLUDE 

// ejemplo #1
// mostrara  true porque esa palabra se encuentra en la cadena

// let cadena = "soy keiner y estoy programando";
// let cadena2 = "programando";

// resultado = cadena.includes( cadena2);

// document.write( resultado) ;

// USO DEL INDEXOF

// ejemplo #1
// Mostrará = 12 porque es el índice dónde empieza la palabra Tarado en este caso la letra T  con la que empieza esa palabra viene siendo el número 12.
// let cadena = " Pedro es un Tarado ";
// let cadena2 =" "; 

// resultado = cadena.indexOf(" Tarado ");

// document.write(resultado);

// para acceder a unas de las letras de la cadena solo es hacer lo sgte

// let cadena = "Pedro es un Tarado" ; 
// let cadena2= " " ; 

// resultado = cadena.indexOf(" Tarado ") ;

// document.write(cadena[0]);

// SI NO ENCUENTRA NINGUNA PALABRA SALDRA UN -1

// let cadena = " Pedro es un Tarado" ; 
// let cadena2= " " ; 

// resultado = cadena.indexOf("bobo") ;

// document.write(resultado);


// USO DEL LASTINDEXOF

// ejemplo #1
// mostrara =  40 porque la palabra y su letra se encuentra en la posición 40 , solamente sería contar para testificar.
// let cadena =  "Pedro es un Tarado Tarado Tarado Tarado Tarado"; 
// let cadena2= " " ; 

// resultado =   cadena.lastIndexOf("Tarado") ; 

// document.write(resultado);

// USO DEL PADSTART

// ejemplo #1
// Mostrará= LLLLLLLabc este método lo que hac es que te rellena la cadena según como se lo específiquemos en la este caso.
// let cadena = " abc";
// let cadena2 = "" ;

// resultado =  cadena.padStart(10,"L");

// document.write(resultado);

// USO DEL PADEND

// ejemplo #1
// Mostrará= abcLLLLLLL
// let cadena = "abc"; 
// let cadena2= " " ; 

// resultado = cadena.padStart(10,"L");

// document.write(resultado);

// USO DEL REPEAT 
// Mostrará = 123 123 123 porque le dimos el valor para a que se repita tres veces .
// let cadena = " 123";
// let cadena2 = " " ; 

// resultado =  cadena.repeat(3);

// document.write( resultado);

// USO DEL SPLIT 
// Mostrará= hola.como,estás separa eso por comas para saber que es un array solo es hacer lo sgte.
// let cadena = " hola,como,estás";

// let resultado = cadena.split(",");

// document.write(resultado);

// para ver que es un array es hacer lo sgte 

// let cadena = " hola,como,estás";

// let resultado = cadena.split(",");

// document.write(resultado[0]);

// Mostrara = hola ya que esta en la posición 0 .

// Si hacemos lo sgte 

// let cadena = " hola como estás";

// let resultado = cadena.split("como");

// document.write(resultado);
// Mostrara = hola , estás no muestra el como porque eso es lo que hace el SPLIT elimina eso y luego lo divide .

// USO DEL SUBSTRING

// let cadena = "ABCDEFG";

// let resultado = cadena.substring(0,3);

// document.write(resultado);

// Mostrará = ABC porque empieza a contar 0,1,2,3 y da ese resultado y si ponemos (0,20) mostrará todas las letras porque cuenta 0,1,2,3,4,5,6,7 y no pone las demás porque no existen ... Porque solo son 7 letras pero que cuenta desde 0 .

// Osea el 0 es para decir dónde quiero que empieze y el otro número osea el 3 es para saber dónde quiero que termine .


// USO DEL TOUPPERCASE

// let cadena = "abcdefg"; 

// let resultado = cadena.toUpperCase();

// document.write(resultado);

// Mostrará= ABCDEFG en mayúscula ya que allá la teníamos en minúscula. 

// USO DEL TOLOWERCASE

// let cadena = "ABCDEFG";

// let resultado= cadena.toLowerCase();

// document.write(resultado);

// Mostrará= abcdefg en minúscula ya que estaba en mayúscula.

// ADICIONALES 

// USO DEL TOSTRING

// let cadena = 50;

// let resultado= cadena.toString(); 

// document.write(2+resultado);

// Mostrará = 250 para comprobar eso podemos hacer lo sgte .

// let cadena = 50;

// let resultado= cadena.toString(); 

// document.write(2+50);

// Mostrará= 52 

// USO DEL TRIM

// .length = es una propiedad que muestra cuántos caracteres tiene un elemento .

// let cadena = "     Pedro     ";

// let resultado= cadena.trim();

// document.write(resultado.length);

// Mostrará= 5 porque esos son los caracteres que tiene el nombre Pedro .

// La cadena con espacio tiene 11 caracteres ... Mientras que la cadena original tiene 5 carácteres.

// USO DEL TRIMEND


// let cadena = "   Pedro     ";

// let resultado= cadena.trimEnd();

// document.write(resultado.length);

// Mostrará= 8 porque elimina los espacios al final , esa cadena tiene 11 caracteres entonces el trimEnd elimina los espacios de lo último para que quede con 8 caracteres.


// USO DEL TRIMSTART

// let cadena = "    Pedro   ";

// let resultado= cadena.trimStart();

// document.write(resultado.length);

// Mostrará= 8 porque elimina los espacios del comienzo y queda con los 8 caracteres .

// -----------------------------------------------------------------------------------------


// Metodos de Arrays 

// TRANSFORMADORES

// Uso del pop ()

// let nombres = ["pedro","maria","jorge"];


// // document.write(nombres + "<br>") // estos son los nombres de forma normal

// let resultado = nombres.pop(); 

// document.write(resultado);// se imprime el jorge solamente porque lo elimina y luego lo devuelve


// Uso del shift()

// let nombres = ["pedro","maria","jorge"];


// document.write(nombres + "<br>")

// let resultado = nombres.shift(); // este es al reves osea elimina el primero y luego lo imprime

// document.write(resultado);

// Uso del push()

// let nombres = ["pedro","maria","jorge"];

// document.write(nombres + "<br>")

// let resultado = nombres.push("keiner"); // muestra la cantidad de elementos del arreglo

// document.write(resultado);


// Uso del reverse()

// let numeros = [1,2,3,4,5];

// document.write( numeros + "<br>") // forma normal 

// let resultado = numeros.reverse();

// document.write(resultado); imprime en reversa


// Uso del unshift ()

// let numeros = [3,4,5];

// document.write( numeros + "<br>") // forma normal 

// numeros.unshift(0,1,2); // estos numeros los agrega al inicio 

// document.write(numeros); // imprime esos numeros

// Uso del sort()

// let numeros = [1,5,2,4,7,3,5];

// document.write(numeros + "<br>") // forma desordenada

// numeros.sort();

// document.write(numeros); // forma ordenada


// Uso del splice ()


// let numeros = ["L","B","S","K","M"];// forma normal 

// document.write(numeros + "<br>")

// numeros.splice(1,3,"O","W","P"); // agregando 

// document.write(numeros);


// ACCESORES

// Uso del join()

// let numeros = ["abecedario" , "manzana", "pedro" , "dedo" , "bobo"]; // original 

// document.write(numeros + "<br>");

// // let resultado = numeros.join("<br>elemento: ");// todo es es una cadena de texto 
// let resultado = numeros.join("__________________________");// forma dos de visualizar 

// document.write("elemento : "+resultado);// imprime 


// Uso del slice();

// let numeros = ["abecedario" , "manzana", "pedro" , "dedo" , "bobo"]; 

// document.write(numeros + "<br>");

// let resultado = numeros.slice(0,2);// expecificar de donde empieza y donde termina

// document.write(resultado); 

// Uso nuevamente del includes()

// let numeros = ["abecedario" , "manzana", "pedro" , "dedo" , "bobo"]; 

// document.write(numeros + "<br>");

// let resultado = numeros.includes("pedro");

// document.write(resultado); 


// Uso nuevamente del indexOf()

// let numeros = ["abecedario" , "manzana", "pedro" , "dedo" , "bobo"]; 

// document.write(numeros + "<br>");

// let resultado = numeros.indexOf("pedro");

// document.write(resultado);


// Uso nuevamente del lastIndexOf()

// let numeros = ["abecedario" , "manzana", "pedro" , "dedo" , "bobo"]; 

// document.write(numeros + "<br>");

// let resultado = numeros.lastIndexOf("pedro");

// document.write(resultado);

// DE REPETICION 

// Uso del filter()

// let numeros = ["abecedario" , "manzana", "pedro" , "dedo" , "bobo"]; 

// numeros.filter(
//     (numero)=>{
//         document.write (numero + "<br>")
// })

// Otra forma de hacerlo

// let numeros = ["abecedario" , "manzana", "pedro" , "dedo" , "bobo"]; 

// numeros.filter(function(numero){
//         document.write (numero + "<br>")
// })


// Uso del ForEach()

// let numeros = ["abecedario" , "manzana", "pedro" , "dedo" , "bobo"]; 

// numeros.forEach(
//     (numero)=>{
//         document.write (numero + "<br>")
// })

// Otra forma de hacerlo

// let numeros = ["abecedario" , "manzana", "pedro" , "dedo" , "bobo"]; 

// numeros.forEach(function(numero){
//         document.write (numero + "<br>")
// })


// otras cosas que se pueden hacer con filter

// let numeros = ["abecedario" , "manzana", "pedro" , "dedo" , "bobo"]; 

// resultado = numeros.filter(numero => numero.length > 5)

// document.write(resultado)

// con el ForEach saldra undefined porque no se puede hacer esa accion solo
// se puede con el filter ya que es mas completo


// let numeros = ["abecedario" , "manzana", "pedro" , "dedo" , "bobo"]; 

// resultado = numeros.forEach(numero => numero.length > 5)

// document.write(resultado)

// objeto math Basico 

// Metodos 

// Uso de sqrt ()

// numero = Math.sqrt(25);

// document.write(numero)

// Uso del cbrt()

// numero = Math.cbrt(25); // o cambiar el 25 por un 27 

// document.write(numero)


// Uso del max()

// numero = Math.max(100,500,10000,20000,87000);

// document.write(numero)

// Uso del min()

// numero = Math.min(4,5,88,77,669,100);

// document.write(numero);

// Uso del random()

// numero = Math.random();

// document.write(numero);


// Explicacion adicional del random()
// Mostrar numeros de dos cifras entre 0 y 100

// numero = Math.random()*100;
// numero = numero.toString();
// num = numero[0] + numero [1];
// if (numero[1] == "."){ // esto es para que a la hora de mostrar los numeros ramdom no salga un punto
//     num = numero[0];
// }

// document.write(num)

// Uso del round()

// let numero = Math.random()*100;
// numero = Math.round(numero);

// document.write(numero);

// Uso del fround()

// let numero = Math.fround(9.442475244235423245);

// document.write(numero);

// Uso del floor()

// for (var i = 0; i < 100000 ; i++) {
//     let numero = Math.random()*99;
//     numero = Math.floor(numero+1);

//     document.write(numero+ "<br>");
// }


// Uso del trunc()

// let numero = Math.trunc(9.9) 

// document.write(numero);

// Diferencia con el round()

// let numero = Math.round(9.9) 

// document.write(numero);


// PROPIEDADES 

// Uso del PI

// let numero = Math.PI;

// document.write(numero)

// Uso del SQRT_2

// let numero = Math.SQRT1_2;

// document.write(numero)

// Uso del SQRT

// let numero = Math.SQRT2;

// document.write(numero)

// Uso del E

// let numero = Math.E;

// document.write(numero)

// Uso del LN2 

// let numero = Math.LN2;

// document.write(numero)

// Uso del LN10

// let numero = Math.LN10;

// document.write(numero)

// Uso del LOG2E

// let numero = Math.LOG2E;

// document.write(numero)

// Uso del LOG10E

// let numero = Math.LOG10E;

// document.write(numero)

// Todo se muestra en la consola de la web


// Uso del assert()

// console.assert(5>4); // True no pasara nada en la consola

// console.assert(5<4); // false saldra error porque no es verdadero.

// Uso del clear()

// no pongo ningun codigo porque este lo unico que hace es limpiar la consola

// se pone

// console.clear();

// Uso del error()

// console.error("CONTRASEÑA INCORRECTA")

// Uso del info() y log()

// Todos dos hacen lo mismo

// console.info("PAGINA DE COMIDAS");
// console.log("PAGINA DE COMIDAS");

// Uso del table()

// console.table([5,2,4,,6,6])

// Uso del warn()

// console.warn("che capo, venis bien , pero cuidado porque...")

// Uso del dir()

// console.dir([5,2,4,,6,6])

// ------------------------------------------------------------------------------


// Consola de Js( PARTE 2 ) 

// Metodos de conteo

// Uso del count() y countReset()
// El sgte codigo mostrara 5 veces el count todo se vera en la consola web  

// console.count()
// console.count()
// console.count()
// console.count()
// console.count()
// console.countReset() // cuando llegue a la sexta empezara de nuevo se resetio 
// console.count()
// console.count()
// console.count()
// console.count()
// console.count()

// -------------------------------------------------------------------------------------

// Consola de Js( PARTE 3 ) 

// Funciones de agrupacion 

// Uso del group()

// console.group()
// console.log("hola")
// console.log("keiner")

// console.group("nombres")// es para ponerle un nombre al grupo 
// console.log("keiner")
// console.log("maria")

// Uso del groupEnd()

// solo es colocar a groupEnd() en la consola o por aca mismo tambien funciona.
// lo que hace es eliminar un grupo y todo lo que se escriba se añadira al otro grupo.

// Uso del groupCollapsed()

// console.groupCollapsed("nombres") // este a diferencia del groupCollapsed() lo muestra cerrado , mientras que el group() lo muestra abierto. 
// console.log("hola")
// console.log("keiner")

// -----------------------------------------------------------------------------------

// Consola de Js( PARTE 4 ) 

// Funciones de temporizacion 

// Uso del time() , timeLog() y timeEnd()

// console.time()// comienza el tiempo 
// console.timeLog() // lo detiene
// console.timeEnd() // lo acaba y se termina la temporizacion 


// Modificar estilo del texto en la consola
// con lo sgte es para poder modificar el texto en la consola a continuacion le muestro como hacerlo .
// console.log("%ckeiner","color:red;background:black;padding:20px;border:3px solid blue")

// --------------------------------------------------------------------------------------------------

// Metodos de seleccion de elementos

// USO DEL getElementById()

// parrafo = document.getElementById("parrafo");

// USO DEL getElementsByTagName()

// parrafo = document.getElementsByTagName("p");

// document.write(parrafo) // muestra [object HTMLCollection] 
// document.write(parrafo[0]) // muestra [object HTMLParagraphElement] 

//USO DEL querySelector()

// parrafo = document.querySelector(".parrafo");

// document.write(parrafo) // muestra [object HTMLParagraphElement] 

// USO DEL querySelectorAll()

// parrafo= document.querySelectorAll(".parrafo");

// document.write(parrafo[0] , "<br>") // muestra [object HTMLParagraphElement]
// document.write(parrafo) // muestra [object NodeList] 

// ---------------------------------------------------

// METODOS DE ATRIBUTOS DE UN ELEMENTO 

// METODOS PARA DEFINIR , OBTENER Y ELIMINAR ATRIBUTOS

// USO DEL setAttribute()

// const rangoEtario = document.querySelector(".rangoEtario");

// rangoEtario.setAttribute("type","text")// muestra el nuevo input en este caso de tipo text.

// document.write(rangoEtario); // muestra  [object HTMLInputElement] 

// USO DEL getAttribute() (Obtener)

// const rangoEtario = document.querySelector(".rangoEtario");

// valorDelProducto =rangoEtario.getAttribute("type");
// document.write(valorDelProducto);// muestra lo mismo

// document.write(rangoEtario.getAttribute("type"));

// USO DEL removeAttribute() (Remover)

// const rangoEtario = document.querySelector(".rangoEtario");

// valorDelAtributo = rangoEtario.removeAttribute("type");
// valorDelAtributo = rangoEtario.removeAttribute("type","");

// -------------------------------------

// ATRIBUTOS GLOBALES 

// USO DEL contentEditable

// const titulo = document.querySelector(".titulo");

// titulo.setAttribute("contentEditable","True");
// titulo.setAttribute("contentEditable","false");

// USO DEL dir

// const titulo = document.querySelector(".titulo");

// titulo.setAttribute("dir","rtl"); // O ltr

// USO DEL hidden

// const titulo = document.querySelector(".titulo");

// titulo.setAttribute("hidden","false"); // O True

// titulo.removeAttribute("hidden"); // este codigo es para que se muestre el contenido pero en el index debemos poner el hidden="".

// USO DEL tabIndex

// const titulo = document.querySelector(".titulo");

// titulo.setAttribute("tabIndex","0"); 

// USO DEL title

// const titulo = document.querySelector(".titulo");

// titulo.setAttribute("title","jajajajja") // muestra el jajajjaa no el del index  es para modifcar .

// Atributos de input 

// USO DEL className

// const input = document.querySelector(".input-normal");

// document.write(input); // muestra esto [object HTMLInputElement]

// document.write(input.className); // mostrara input-normal

// USO DEL value

// const input = document.querySelector(".input-normal");

// document.write(input.value) // mostrara el input con valor de 123

// USO DEL type

// const input = document.querySelector(".input-normal");

// document.write(input.type = "text") // input.type = "text" asi tambien se puede

// USO DEL accept

// const input = document.querySelector(".input-normal");

// input.accept("image/png") // solo acepta imagenes con ese formato



// USO DEL form

// Esta explicacion esta toda en el index.html ya que no lleva JS

// USO DEL minLength // minima cantidad de caracteres posibles para el input


// const input = document.querySelector(".input-normal");

// input.minLength = "4" // restringue para que sea al menos 4 caracteres


// USO DEL placeholder // modifica directamente la propiedad placeholder

// const input = document.querySelector(".input-normal");

// input.placeholder = "mi contenido" // lo muestra en el input

// USO DEL required

// const input = document.querySelector(".input-normal");

// input.required = "required" // este campo es requerido entonces te obliga a poner contenido alli

//------------------------------------------------------------------------------------------------------

//Propieda style

// const titulo = document.querySelector(".titulo");

// titulo.style.color = "white" // tambien se puede usar hexadecimal , rgb y rgba
// titulo.style.backgroundColor = "#32b"
// titulo.style.padding = "30px"
// titulo.style.fontFamily = "tahoma"
// titulo.style.textAlign = "center"
// titulo.style.border = "10px dotted black"

// ------------------------------------------------------

// Clases, classList y sus métodos 

// uso del add()

// const titulo = document.querySelector(".titulo");

// titulo.classList.add("grande") // añade esa clase en el index para poderla ver toca inpeccionar la pagina 

// uso del remove()

// const titulo = document.querySelector(".titulo");

// titulo.classList.remove("grande") // nos mostrara la clase porque la removio

// uso del item()

// const titulo = document.querySelector(".titulo");

// let valor = titulo.classList.item(1); // es para acceder a las clases segun su pocision

// document.write(valor) // muestra la posicion como arriba tenemos el numero 1 mostrara grande porque esta despues de titulo

// uso del contains()


// const titulo = document.querySelector(".titulo");

// let valor = titulo.classList.contains("grande"); // parecido al item este muestra un true si la clase si existe 

// document.write(valor) // muestra el true

// if (valor) {
//     document.write(" la clase existe")
// } else {
//     document.write(" la clase no existe")
// }

// uso del toggle()

// const titulo = document.querySelector(".titulo");

// nombreDeclase = "grande";

// let valor = titulo.classList.contains(nombreDeclase);

// titulo.classList.toggle("grande"); // en caso de que la tega la saca y si no la tiene la agrega
// titulo.classList.toggle("grande" , true ); // esto es para forzar , que si es true igual la va a dejar y si es false la va a sacar siempre 

// otra forma y uso del toggle()

// const titulo = document.querySelector(".titulo");

// let valor = titulo.classList.toggle("grande"); // si no existe la agrega y muestra true y si existe la elimina y muestra false
// let valor = titulo.classList.toggle("grande" ,true); // por mas que exista no la va sacar porque le dijimos que siempre sea verdadero y con el false siempre la va a sacar
// document.write(valor);

// uso del replace()

// const titulo = document.querySelector(".titulo");

// let valor = titulo.classList.replace("grande" , "pequeño"); // lo unico que hace es reemplazar la clase grande por pequeño  y si la clase no existe devuelve false

// document.write(valor); // muestra el true


// ---------------------------------------------------------------------------

// OBTENCION Y MODIFICACION DE ELEMENTOS EN HTML

// Uso de textContent

// const titulo = document.querySelector(".titulo");

// let resultado = titulo.textContent;
// document.write(resultado); // Muestra lo que tiene adentro de la etiqueta aun asi este comentada 
// document.write(resultado);// comentando la linea de arriba y en el index comentando el h1 saldra el p pero no el html

// USO DEL innerText 

// const titulo = document.querySelector(".titulo");

// let resultado = titulo.innerText; // devuelve lo mismo que el textContent y el outerText asi que exite el outerText pero no se usa en lo aboluto
// document.write(resultado); 

// Uso del innerHTML

// const titulo = document.querySelector(".titulo");

// let resultado = titulo.innerHTML;

// document.write(resultado)// sin seguira sin mostrar lo que queremos ver y con el outerHTML pasa lo mismo


// segunda parte

// const titulo = document.querySelector(".titulo");

// let resultado = titulo.innerHTML; // mostrara esto Elemento a <style =="" "visibility:="" hidden;"=""></style><b>Modificar</b>

// alert(resultado); 

// Con el outerHTML

// const titulo = document.querySelector(".titulo");

// let resultado = titulo.outerHTML; // mostrara esto <p class="titulo">Elemento a <style =="" "visibility:="" hidden;"=""></style><b>Modificar</b></p>
// alert(resultado); 

// // Los que mas se usan son el textContent , innerHTML y outerHTML


// -----------------------------------------------------------------------

// Creacion De Elementos

// const contenedor = document.querySelector(".contenedor");

// const item = document.createElement("LI"); // la palabra LI debe ir obligatoriamente en mayuscula por si no funciona
// // document.write(item); // se muestra esto [object HTMLLIElement] esto es un objeto html
// console.log(item); // esto muestra en pantalla un <li></li> 

// Explicacion del appendChild()

// const contenedor = document.querySelector(".contenedor");

// const item = document.createElement("LI"); 

// const textDelItem = document.createTextNode("Este es un item de la lista");

// item.appendChild(textDelItem);

// console.log(textDelItem); // ahora si podemos ver todo de forma correcta


// Otra Forma de hacerlo

// const contenedor = document.querySelector(".contenedor");

// const item = document.createElement("LI"); 

// item.innerHTML = "Este es un item de la lista";

// contenedor.appendChild(item);

// console.log(item); // mostrara lo mismo

//--------------------------------------------------------------------

// Uso de createDocumentFragment()

// const contenedor = document.querySelector(".contenedor");

// const fragmento = document.createDocumentFragment();

// for ( i = 0 ; i <20 ; i++){
//     const item = document.createElement("LI");
//     item.innerHTML = "Este es un item de la lista";
//     fragmento.appendChild(item);
// }
// contenedor.appendChild(fragmento) // lo agregamos // el resultado se vera 20 veces

// ------------------------------------------------------------------

// Obtencion y modificacion de childs

// Uso del firstChild

// const contenedor = document.querySelector(".contenedor");

// const primerHijo = contenedor.firstChild;

// console.log(primerHijo); // muestra en consola un #text si lo dejan como lo cambien en el index se vera un <h2>UN h2 Comun</h2>


// Uso del lastChild //Esta popiedad ess para acceder al ultimo hijo que en este caso es la etiqueta p

// const contenedor = document.querySelector(".contenedor");

// const primerHijo = contenedor.lastChild;

// console.log(primerHijo); // mostrara en pantalla el ultimo hio osea el <p> Un parrafo Simple</p> 

// Nota : <div class="contenedor"><h2>Un h2 Comun</h2><h4>Un h4 Comun</h4><p>Un simple Parrafo</p></div> eso es para que todo funcione a la perfeccion


// --------------------------------------------------------------------------------------

// Uso del firstElementChild y lastElementChild  // permite obtener el primer elemento  hijo y asi no vamos a tener que dejar espacios

// const contenedor = document.querySelector(".contenedor");

// const primerHijo = contenedor.firstElementChild;

// console.log(primerHijo);  // mostrara <h2>Un h2 Comun</h2> es lo mismo pero sin dejar espacios

// Uso del childNodes // devuelve todos los nodos hijos

// const contenedor = document.querySelector(".contenedor");

// const hijos = contenedor.childNodes;

// console.log(hijos); // mostrara en consola un NodeList con todo los elementos , ojo no es un array


// Otra forma de verlo

// const contenedor = document.querySelector(".contenedor");

// const hijos = contenedor.childNodes;

// hijos.forEach(hijo => console.log(hijo)); // lo mismo pero de otra forma

// Uso del childrem // solo muestra los elementos

// const contenedor = document.querySelector(".contenedor");

// const hijos = contenedor.children;

// console.log(hijos); // mostrara en consola solamente los elementos del html

// Otra forma de hacerlo 

// const contenedor = document.querySelector(".contenedor");

// const hijos = contenedor.children;

// for (hijo of hijos){
//     console.log(hijo)
// }

// -------------------------------------------------------

// METODOS DE CHILDS (hijos)

// Uso del replaceChild()

// const contenedor = document.querySelector(".contenedor");

// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2")
// h2_nuevo.innerHTML = "Titulo";


// h2_antiguo = document.querySelector(".h2");

// contenedor.replaceChild(h2_nuevo,h2_antiguo) // reemplazamos el un h2 comun por --- Titulo si comentamos esta linea de codigo saldra todo normal como antes.


// Uso del removeChild() // remover hijo

// const contenedor = document.querySelector(".contenedor");

// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";

// h2_antiguo = document.querySelector(".h2");

// contenedor.removeChild(h2_antiguo);// con esto reovemos el hijo en conclusion elimina el un h2 comun.



// Uso del hasChildNodes() es para verificar si existe un elemento hijo o no 

// const contenedor = document.querySelector(".contenedor")
// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo"; 

// const h2_antiguo = document.querySelector(".h2");

// // let respuesta = h2_antiguo.hasChildNodes();
// let respuesta = h2_nuevo.hasChildNodes(); // asi sale que no tiene hijos porque en el index.html no tiene contenido pero si se lo colocamos saldra lo contrario

// if (respuesta){
//     document.write("El elemento  tiene hijos")
// } else 
//     document.write("El elemento no tiene hijos")

// -------------------------------------------------------------

// Propiedades de parent(padres)

// Uso del parentElement

// const contenedor = document.querySelector(".contenedor")
// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo"; 

// const h2_antiguo = document.querySelector(".h2");

// console.log(h2_antiguo.parentElement); // muestra en consola <div class="contenedor"></div> y dentro de eso esta el contendio.
// console.log(contenedor.parentElement); // dira que el padre del contendor es el body

// Uso del parentNode

// const contenedor = document.querySelector(".contenedor")
// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo"; 

// const h2_antiguo = document.querySelector(".h2");

// console.log(contenedor.parentElement); // dira que el padre del contendor es el body
// console.log(h2_antiguo.parentNode); // asi si si funciona  y muestra <div class="contenedor"></div>
// console.log(h2_nuevo.parentNode);// asi sale nulo en la consola

// -----------------------------------------------------------------------------------------------


// Propiedades de siblings (Hermanos)

// USO DEL nextSibling

// const contenedor = document.querySelector(".contenedor")
// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo"; 

// const h2_antiguo = document.querySelector(".h2");

// console.log(h2_antiguo.nextSibling); // muestra en consola un #text porque lo que le sigue al h2 es texto


// USO DEL previousSibling

// const contenedor = document.querySelector(".contenedor")
// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo"; 

// const h2_antiguo = document.querySelector(".h2");

// console.log(h2_antiguo.previousSibling); // ASI SI FUNCIONA
// console.log(h2_antiguo.previousNextSibling); // ASI SALE  UNDEFINED


// USO DEL nextElementSibling

// const contenedor = document.querySelector(".contenedor")
// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo"; 

// const h2_antiguo = document.querySelector(".h2");

// console.log(h2_antiguo.nextElementSibling); // Muestra <h4> Un h4 Comun</h4> en consola // muestra basicamente el sgte despues del h2

// USO DEL previousElementSibling

// const contenedor = document.querySelector(".contenedor")
// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo"; 

// const h2_antiguo = document.querySelector(".h2");

// console.log(h2_antiguo.previousElementSibling); // sale nulo en consola

// ------------------------------------------------------------------------------------------

// Nodes una propiedad extra

// USO DEL closest()

// const div = document.querySelector(".div-3")


// console.log(div.closest(".div")); // retorna el <div class="div"></div> con el DIV 2 adentro de el


// HASTA AQUI SON TODOS LOS EJEMPLOS VISTOS DURANTE EL CURSO SE LOS DEJO PARA
// QUE PRACTIQUEN Y SE FAMILIARIZEN CON EL LENGUAJE ESPERO LES HAYA GUSTADO Y HASTA LAS PROXIMA
// Y NUEVAMENTE LES DOY LAS GRACIAS POR ESE APOYO AL ESTAR PENDIENTE DE ESTE CURSO SE QUE LES SERVIRA
// MUCHO YA QUE ESTE LENGUAJE ES MUY DEMANDADO EN EL MERCADO 
// ME LLAMO KEINER MUÑOZ Y NOS VEMOS 
// A programar 











































