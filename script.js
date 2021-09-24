function carregar ()  {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        console.log('Bom Dia!')
        img.src = 'manha.png'
        document.body.style.background = '#aec66f'
    } else if (hora >= 12 && hora <18) {
        console.log('Boa Tarde!')
        img.src = 'tarde.png'
        document.body.style.background = '#846372'
    } else {
        console.log('Boa Noite!')
        img.src = 'noite.png'
        document.body.style.background = '#51435a'
    }
}