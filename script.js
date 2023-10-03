function carregar() {
    // Obtém referências para os elementos HTML com IDs 'msg', 'imagem' e 'msgDia'
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var msgDia = document.getElementById('msgDia');

    // Cria um objeto Date para obter a hora atual
    var data = new Date();
    var hora = data.getHours();

    // Define o conteúdo do elemento 'msg' para mostrar a hora atual
    msg.innerHTML = `Agora são ${hora} horas`;

    // Verifica o valor da variável 'hora' para determinar se é de manhã, tarde ou noite
    if (hora >= 0 && hora < 12) {
        msgDia.innerHTML = 'Bom Dia!';
        img.src = 'morning.png'; // Define a imagem 'manha.png' como a fonte da imagem 'imagem'
        document.body.style.background = '#fff39b'; // Define a cor de fundo do corpo da página
    } else if (hora >= 12 && hora < 18) {
        msgDia.innerHTML = 'Bom Tarde!';
        img.src = 'afternoon.png'; // Define a imagem 'tarde.png' como a fonte da imagem 'imagem'
        document.body.style.background = '#de1263'; // Define a cor de fundo do corpo da página
    } else {
        msgDia.innerHTML = 'Bom Noite!';
        img.src = 'night.png'; // Define a imagem 'noite.png' como a fonte da imagem 'imagem'
        document.body.style.background = '#415870'; // Define a cor de fundo do corpo da página
    }
}
