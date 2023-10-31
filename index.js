var nomedoheroi = "Keres" ;
var xpdoheroi = 7000 ;
if (xpdoheroi < 1000 ) {
    niveldoheroi = "ferro"
} else if (xpdoheroi >= 1001 && xpdoheroi <= 2000) { 
    niveldoheroi = "bronze"
} else if (xpdoheroi >= 2001 && xpdoheroi <= 5000) {
    niveldoheroi = "prata"
} else if (xpdoheroi >= 6001 && xpdoheroi <= 7000) {
      niveldoheroi = "ouro"
}else if (xpdoheroi >= 7001 && xpdoheroi <= 8000) {
      niveldoheroi = "platina"
}else if (exdoheroi >= 8001 && xpdoheroi <= 9000) {
        niveldoheroi = "Ascendente"
}else if (xpdoheroi >= 9001 && xpdoheroi <= 10000) {
    niveldoheroi = "Imortal"
}else {
    niveldoheroi = " Radiante"
}



console.log ( " o Herói de nome  "     + nomedoheroi + " está no nível de " + niveldoheroi)