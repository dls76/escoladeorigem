function copiar() {

    let textoCopiado = document.getElementById('escola')

    textoCopiado.select()
    // textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    
    // alert(textoCopiado.value)
}
