console.log("konzolra írunk a senctionben");
            document.write("Hello világ a senction-ben");
            document.getElementById("a").value=2;
            document.getElementById("b").value=3;
            var valtozoA = document.getElementById("a").value;
            var valtozoB = document.getElementById("b").value;
            
                document.write( "<p sytle='color:red'> Első érték:"+ valtozoA+" </p>")
            
            
            
             document.write("<p>Első változó: "+valtozoA+"</p>");
             document.write("<p>Második változó: "+valtozoB+"</p>")
             var osszeg=Number(valtozoA)+Number(valtozoB);
             document.write("<p>A két szám összege: "+osszeg+"</p>");
             
var szoveg="";
//var sv=0;
//for (var i = 1; i < 101; i++) {
//    szoveg+=i+", ";
//    sv++;
//    if(sv == 10)
//    {
//        szoveg+="<br>";
//        sv=0;
//    }
//}
//document.write("<p>"+szoveg+"</p>");
kiir();

function kiir() {
for (var i = 1; i < 101; i++) {
    szoveg+=i+", ";
    if(i%10 === 10)
    {
        szoveg+="<br>";
    }
}
document.write("<p>" + szoveg + "</p>");
}