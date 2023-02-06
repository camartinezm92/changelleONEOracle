function encriptar(){
    var textoentrada = document.getElementById("textoencriptador").value;
    var textoEncriptado = textoentrada.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById("textoresultado").value = textoEncriptado;
}

function desencriptar(){
    var textoentrada = document.getElementById("textoencriptador").value;
    var textoEncriptado = textoentrada.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("textoresultado").value = textoEncriptado;
}

function copiar(){
    var textoentrada = document.getElementById("textoresultado").value;
    var text = navigator.clipboard.writeText(textoentrada)
            .then(()=>{
                alert("Texto copiado correctamente")
            })
            navigator.clipboard.readText(text).then(() => {
            console.log('Texto del portapapeles: ', text);
            }, (err) => {
            console.error('No se pudo leer el texto del portapapeles: ', err);
             });
}

function eliminar(){
    document.getElementById("textoresultado").value = "";
    document.getElementById("textoencriptador").value = "";
}




