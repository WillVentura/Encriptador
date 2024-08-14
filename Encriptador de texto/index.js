function encriptar(){
    let texto = document.getElementById("texto").value;
    let titulomensaje =document.getElementById("titulo-mensaje");
    let parrafo=document.getElementById("parrafo");
    let persona=document.getElementById("persona");

    let textoCifrado=texto
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat");
    if(document.getElementById("texto").value.length !=0){
    texto=textoCifrado;
    document.getElementById("titulo-mensaje").textContent="Texto encriptado con éxito";
    document.getElementById("parrafo").textContent="";
    document.getElementById("persona").src="";
} else{
    persona.src=""
    alert("Debes ingresar algún texto");
}
}
