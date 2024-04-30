//worker2
let value = prompt ("digite um número: ");
alert("O número informado foi:" +value);

//worker3
alert("Alerta de para somar valores")
let value1 = prompt ("Insira o primeiro valor:" );
let value2 = prompt ("Insira o segundo valor: " );
let process = Number(value1) + Number(value2);
alert("O seu resutado foi:" + process);

//worker4
alert("PROGRAMA QUE CALCULA A NOTA");
let primeiranota = prompt ("Insira a primeiro nota: ");
let segundanota = prompt ("Insira a segunda nota: ");
let terceiranota = prompt ("Insira a terceira nota: ");
let quartanota = prompt ("Insira a quarta nota: ");
let result = (Number(primeiranota) + Number(segundanota) + Number(terceiranota) + Number(quartanota)) /4;
alert("O resultado da média do aluno é: " +result);

//worker5
alert("PROGRAMA QUE CONVERTE METROS PARA CENTÍMETROS: ");
let metro = prompt ("digite quantos metros você tem: ");
let centimetro = Number(metro) * 100; 
alert ("O você tem em centímetros: " +centimetro);

//worker6
alert("PROGRAMA QUE CALCULA O RAIO DO CIRCULO:");
let raio = prompt ("digite o raio do circulo: ");
let calculo = Math.PI * Math.pow(Number(raio), 2);
alert ("O seu raio é: " + calculo);

//worker7
alert("CALCULO DA ÁREA DO QUADRADO: ");
let LadoL = prompt ("Digite o lado do quadrado: ");
let area = Math.pow(Number(LadoL), 2);
alert("A área do seu quadrado é: " +area); 

//worker8
alert("PROGRAMA DE CALCULA SALÁRIO: ");
let valorporH = prompt ("digite quanto você ganha por hora: "); 
let ndehoras = prompt ("digite o seu número de horas: ");
let programa = Number(valorporH) * Number(ndehoras);
alert ("O seu salário é: " +programa); 

//worker9
alert ("PROGRAMA QUE CONVERTE F EM C: ");
let F = prompt ("Digite o graus em fahrenheit: ");
let C = (((Number(F) - 32) * 5 ) / 9);
alert ("A temperatura em C: " +C); 

//worker10 
alert("PROGRAMA QUE CONVERTE C ENM F: ");
let Ce = prompt ("digite sua tempemratura: ");
let Fa = (((Number(Ce) * 9) /5 ) + 32);
alert ("A temperatura em F é: " +Fa);

