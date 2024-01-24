

var marka = "Opel";
var model = 'Astra';
var otomatik = "yes";

var vites = '1';

if(vites <= '2'){
    console.log("vites otomatik olabilir")
}

switch(vites){
    case "1":
        console.log("araç manuel");
        break;
    case "2":
        console.log("araç otomatik");
        break;
    case "3":
        console.log("yanlış değer");
        break;
}