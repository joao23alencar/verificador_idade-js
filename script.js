function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (formAno.value == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                genero = 'Homem'
                    if (idade >= 0 && idade < 10) {
                        img.setAttribute('src', 'bebe.m.png')
                    } else if (idade >= 10 && idade < 21){
                        img.setAttribute('src', 'adolescente.m.png')
                    } else if ( idade >=21 && idade < 65){
                        img.setAttribute('src', 'adulto.m.png')
                    } else {
                        img.setAttribute('src', 'idoso.m.png')
                    }
            }   else if (fsex[1].checked){
                genero = 'Mulher'
                   if (idade >= 0 && idade < 10) {
                        img.setAttribute('src', 'bebe.f.png')
                    } else if (idade >= 10 && idade < 21){
                        img.setAttribute('src', 'adolescente.f.png')
                    } else if ( idade >=21 && idade < 65){
                        img.setAttribute('src', 'adulto.f.png')
                    } else {
                        img.setAttribute('src', 'idoso.f.png')
                    }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
    } 
}