let jogadorEscolha = 0,
    jogadorPontos = 0,
    computadorEscolha = 0,
    computadorPontos = 0,
    ganhador = -1

function jogar(escolha){
    jogadorEscolha = escolha
    computadorEscolha = Math.floor(Math.random() * (3 - 1 + 1)) + 1

    if (jogadorEscolha == computadorEscolha){
        ganhador = 0
    }else if(jogadorEscolha == 1 && computadorEscolha == 2){
        ganhador = 2
    }else if (jogadorEscolha == 1 && computadorEscolha == 3){
        ganhador = 1
    }else if (jogadorEscolha == 2 && computadorEscolha == 1){
        ganhador = 1
    }else if (jogadorEscolha == 2 && computadorEscolha == 3){
        ganhador = 2
    }else if (jogadorEscolha == 3 && computadorEscolha == 1){
        ganhador = 2
    }else if (jogadorEscolha == 3 && computadorEscolha == 2){
        ganhador = 1
    }

    document.getElementById('jogadorEscolha1').classList.remove('selecionado')
    document.getElementById('jogadorEscolha2').classList.remove('selecionado')
    document.getElementById('jogadorEscolha3').classList.remove('selecionado')
    document.getElementById('computadorEscolha1').classList.remove('selecionado')
    document.getElementById('computadorEscolha2').classList.remove('selecionado')
    document.getElementById('computadorEscolha3').classList.remove('selecionado')

    document.getElementById('jogadorEscolha' + jogadorEscolha).classList.add('selecionado')
    document.getElementById('computadorEscolha' + computadorEscolha).classList.add('selecionado')

    if (ganhador == 0){
        document.getElementById('mensagem').innerHTML = "EMPATE"
    }else if (ganhador == 1){
        document.getElementById('mensagem').innerHTML = "VENCEMO"
        jogadorPontos++
    }else if (ganhador == 2){
        document.getElementById('mensagem').innerHTML = "O VERME VENCEU"
        computadorPontos++
    }

    document.getElementById('jogadorPontos').innerHTML = jogadorPontos
    document.getElementById('computadorPontos').innerHTML = computadorPontos
}