//Ejercicio 1

function businessHours(dayNumber, hourNumber){
    dayNumber=prompt("Ingrese día:");
if (dayNumber >5) {
    alert(false);
}
else{ alert (true);}
    hourNumber=prompt("Ingrese hora:");
if (hourNumber < 9 || hourNumber > 18) {
    alert(false);
}
else{ alert (true);}
}

businessHours(); 

//Ejercicio 2

function getDayNumber(yearDayNumber){
    var x;
    yearDayNumber=prompt("Ingresa día del año del 1 al 365");
    x= yearDayNumber%7;

switch (x){
        case 0:
    alert("Es Domingo");
    break;

        case 1:
    alert ("Es Lunes");
    break;
    
case 2:
    alert("Es Martes");
    break;
case 3:
    alert("Es Miércoles");
    break;
    case 4:
    alert ("Es Jueves");
    break;
case 5:
    alert("Es Viernes");
    break;
case 6:
    alert("Es Sabado");
    break;
} 
    
}
getDayNumber();

//Ejercicio 3
function dayAndHourWork(yearDayNumber, hourNumber){

var x;
    yearDayNumber=prompt("Ingresa día del año del 1 al 365");
    x= yearDayNumber%7;

switch (x){
        case 0:
    alert("Es Domingo, no se trabaja");
    break;

        case 1:
    alert ("Es Lunes, se trabaja");
    break;
    
case 2:
    alert("Es Martes, se trabaja");
    break;
case 3:
    alert("Es Miércoles, se trabaja");
    break;
    case 4:
    alert ("Es Jueves, se trabaja");
    break;
case 5:
    alert("Es Viernes, se trabaja");
    break;
case 6:
    alert("Es Sabado, no se trabaja");
    break;
} 
    
hourNumber=prompt("Ingrese hora:");
if (hourNumber < 9 || hourNumber > 18) {
    alert(false);
}
else{ alert (true);}
}
dayAndHourWork(); 