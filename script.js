function imagem() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("idad");
    var res = document.getElementById("resp");

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert("[ERRO]verifique os dados e tente novamente")
    }else {
        var fsex = document.getElementsByName("grupo")
        var idade = ano - Number(fano.value)
        var img = document.createElement("img")
        var genero = ''
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                // CRiANCA
                img.src = 'homem-crianca.jpeg'
            } else if(idade < 21) {
                // JOVEM
                img.src = 'homem-jovem.jpeg'
            } else if(idade < 50) {
                // ADULTO
                img.src = 'homem-maduro.jpeg'
            } else {
                // IDOSO
                img.src = 'homem-idoso.jpeg'
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // CRiANCA
                img.src = 'mulher-crianca.jpeg'
            } else if(idade < 21) {
                // JOVEM
                img.src = 'mulher-jovem.jpeg'
            } else if(idade < 50) {
                // ADULTO
                img.src = 'mulher-madura.jpeg'
            } else {
                // IDOSO
                img.src = 'mulher-idosa.jpeg'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        document.getElementById("fotos").appendChild(img);
    }

    

}