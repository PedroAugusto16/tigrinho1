var saldoAtual = Number(localStorage.getItem("valor"))
document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)

function salvaDeposito() {
    var deposito = Number(document.getElementById('valorAdicionar').value);
    saldoAtual = saldoAtual + deposito
    var saldo = localStorage.setItem('valor', saldoAtual)
    alert('Valor de R$' + deposito + ' depositado com sucesso!');
    location.reload()
    
}

function botao() {
    if (saldoAtual > 0) {
        let select = document.querySelector('#aposta')
        let optionValue = select.options[select.selectedIndex]
        let novaAposta = optionValue.value
        let valorAposta = novaAposta
        saldoAtual -= valorAposta
        localStorage.setItem('valor', saldoAtual)
        document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
        if (saldoAtual === 0) {
            document.querySelector('button').setAttribute('disabled', 'true')
        }
    }
}

function sorteio() {
   
    document.querySelector('#linha1').style.backgroundColor = 'rgb(30, 30, 30)'
    document.querySelector('#linha2').style.backgroundColor = 'rgb(30, 30, 30)'
    document.querySelector('#linha3').style.backgroundColor = 'rgb(30, 30, 30)'
    document.querySelector('#linha4').style.backgroundColor = 'rgb(30, 30, 30)'
    document.querySelector('#linha5').style.backgroundColor = 'rgb(30, 30, 30)'
    document.querySelector('#linha6').style.backgroundColor = 'rgb(30, 30, 30)'
    document.querySelector('#linha7').style.backgroundColor = 'rgb(30, 30, 30)'
    document.querySelector('#linha8').style.backgroundColor = 'rgb(30, 30, 30)'
    document.querySelector('#linha9').style.backgroundColor = 'rgb(30, 30, 30)'

    document.getElementById('imagem1').style.animation = 'pulsar2 2s infinite'
    document.getElementById('imagem2').style.animation = 'pulsar2 2s infinite'
    document.getElementById('imagem3').style.animation = 'pulsar2 2s infinite'
    document.getElementById('imagem4').style.animation = 'pulsar2 2s infinite'
    document.getElementById('imagem5').style.animation = 'pulsar2 2s infinite'
    document.getElementById('imagem6').style.animation = 'pulsar2 2s infinite'
    document.getElementById('imagem7').style.animation = 'pulsar2 2s infinite'
    document.getElementById('imagem8').style.animation = 'pulsar2 2s infinite'
    document.getElementById('imagem9').style.animation = 'pulsar2 2s infinite'
    


    var num1 = Math.round(Math.random() * 6)
    if (saldoAtual > 0) {
        if (num1 == 1) {
            imagem1.innerHTML = '<img src="imagem/laranja.png" width="160px"></img>'
        } if (num1 == 2) {
            imagem1.innerHTML = '<img src="imagem/pote.png" width="160px"></img>'
        } if (num1 == 3) {
            imagem1.innerHTML = '<img src="imagem/laco.png" width="160px"></img>'
        } if (num1 == 4) {
            imagem1.innerHTML = '<img src="imagem/saco.png" width="160px"></img>'
        } if (num1 == 5) {
            imagem1.innerHTML = '<img src="imagem/carta.png" width="160px"></img>'
        } if (num1 == 6) {
            imagem1.innerHTML = '<img src="imagem/tigrinho.png" width="160px"></img>'
        }

        var numeroSorteado = document.getElementById("linha2")
        var num2 = Math.round(Math.random() * 6)
        if (saldoAtual > 0) {
            if (num2 == 1) {
                imagem2.innerHTML = '<img src="imagem/laranja.png" width="160px"></img>'
            } if (num2 == 2) {
                imagem2.innerHTML = '<img src="imagem/pote.png" width="160px"></img>'
            } if (num2 == 3) {
                imagem2.innerHTML = '<img src="imagem/laco.png" width="160px"></img>'
            } if (num2 == 4) {
                imagem2.innerHTML = '<img src="imagem/saco.png" width="160px"></img>'
            } if (num2 == 5) {
                imagem2.innerHTML = '<img src="imagem/carta.png" width="160px"></img>'
            } if (num2 == 6) {
                imagem2.innerHTML = '<img src="imagem/tigrinho.png" width="160px"></img>'
            }
        }
        var numeroSorteado = document.getElementById("linha3")
        var num3 = Math.round(Math.random() * 6)
        if (saldoAtual > 0) {
            if (num3 == 1) {
                imagem3.innerHTML = '<img src="imagem/laranja.png" width="160px"></img>'
            } if (num3 == 2) {
                imagem3.innerHTML = '<img src="imagem/pote.png" width="160px"></img>'
            } if (num3 == 3) {
                imagem3.innerHTML = '<img src="imagem/laco.png" width="160px"></img>'
            } if (num3 == 4) {
                imagem3.innerHTML = '<img src="imagem/saco.png" width="160px"></img>'
            } if (num3 == 5) {
                imagem3.innerHTML = '<img src="imagem/carta.png" width="160px"></img>'
            } if (num3 == 6) {
                imagem3.innerHTML = '<img src="imagem/tigrinho.png" width="160px"></img>'
            }
        }
        var numeroSorteado = document.getElementById("linha4")
        var num4 = Math.round(Math.random() * 6)
        if (saldoAtual > 0) {
            if (num4 == 1) {
                imagem4.innerHTML = '<img src="imagem/laranja.png" width="160px"></img>'
            } if (num4 == 2) {
                imagem4.innerHTML = '<img src="imagem/pote.png" width="160px"></img>'
            } if (num4 == 3) {
                imagem4.innerHTML = '<img src="imagem/laco.png" width="160px"></img>'
            } if (num4 == 4) {
                imagem4.innerHTML = '<img src="imagem/saco.png" width="160px"></img>'
            } if (num4 == 5) {
                imagem4.innerHTML = '<img src="imagem/carta.png" width="160px"></img>'
            } if (num4 == 6) {
                imagem4.innerHTML = '<img src="imagem/tigrinho.png" width="160px"></img>'
            }
        }
        var numeroSorteado = document.getElementById("linha5")
        var num5 = Math.round(Math.random() * 6)
        if (saldoAtual > 0) {
            if (num5 == 1) {
                imagem5.innerHTML = '<img src="imagem/laranja.png" width="160px"></img>'
            } if (num5 == 2) {
                imagem5.innerHTML = '<img src="imagem/pote.png" width="160px"></img>'
            } if (num5 == 3) {
                imagem5.innerHTML = '<img src="imagem/laco.png" width="160px"></img>'
            } if (num5 == 4) {
                imagem5.innerHTML = '<img src="imagem/saco.png" width="160px"></img>'
            } if (num5 == 5) {
                imagem5.innerHTML = '<img src="imagem/carta.png" width="160px"></img>'
            } if (num5 == 6) {
                imagem5.innerHTML = '<img src="imagem/tigrinho.png" width="160px"></img>'
            }
        }
        var numeroSorteado = document.getElementById("linha6")
        var num6 = Math.round(Math.random() * 6)
        if (saldoAtual > 0) {
            if (num6 == 1) {
                imagem6.innerHTML = '<img src="imagem/laranja.png" width="160px"></img>'
            } if (num6 == 2) {
                imagem6.innerHTML = '<img src="imagem/pote.png" width="160px"></img>'
            } if (num6 == 3) {
                imagem6.innerHTML = '<img src="imagem/laco.png" width="160px"></img>'
            } if (num6 == 4) {
                imagem6.innerHTML = '<img src="imagem/saco.png" width="160px"></img>'
            } if (num6 == 5) {
                imagem6.innerHTML = '<img src="imagem/carta.png" width="160px"></img>'
            } if (num6 == 6) {
                imagem6.innerHTML = '<img src="imagem/tigrinho.png" width="160px"></img>'
            }
        }
        var numeroSorteado = document.getElementById("linha7")
        var num7 = Math.round(Math.random() * 6)
        if (saldoAtual > 0) {
            if (num7 == 1) {
                imagem7.innerHTML = '<img src="imagem/laranja.png" width="160px"></img>'
            } if (num7 == 2) {
                imagem7.innerHTML = '<img src="imagem/pote.png" width="160px"></img>'
            } if (num7 == 3) {
                imagem7.innerHTML = '<img src="imagem/laco.png" width="160px"></img>'
            } if (num7 == 4) {
                imagem7.innerHTML = '<img src="imagem/saco.png" width="160px"></img>'
            } if (num7 == 5) {
                imagem7.innerHTML = '<img src="imagem/carta.png" width="160px"></img>'
            } if (num7 == 6) {
                imagem7.innerHTML = '<img src="imagem/tigrinho.png" width="160px"></img>'
            }
        }

        var numeroSorteado = document.getElementById("linha8")
        var num8 = Math.round(Math.random() * 6)
        if (saldoAtual > 0) {
            if (num8 == 1) {
                imagem8.innerHTML = '<img src="imagem/laranja.png" width="160px"></img>'
            } if (num8 == 2) {
                imagem8.innerHTML = '<img src="imagem/pote.png" width="160px"></img>'
            } if (num8 == 3) {
                imagem8.innerHTML = '<img src="imagem/laco.png" width="160px"></img>'
            } if (num8 == 4) {
                imagem8.innerHTML = '<img src="imagem/saco.png" width="160px"></img>'
            } if (num8 == 5) {
                imagem8.innerHTML = '<img src="imagem/carta.png" width="160px"></img>'
            } if (num8 == 6) {
                imagem8.innerHTML = '<img src="imagem/tigrinho.png" width="160px"></img>'
            }
        }
        var numeroSorteado = document.getElementById("linha9")
        var num9 = Math.round(Math.random() * 6)
        if (saldoAtual > 0) {
            if (num9 == 1) {
                imagem9.innerHTML = '<img src="imagem/laranja.png" width="160px"></img>'
            } if (num9 == 2) {
                imagem9.innerHTML = '<img src="imagem/pote.png" width="160px"></img>'
            } if (num9 == 3) {
                imagem9.innerHTML = '<img src="imagem/laco.png" width="160px"></img>'
            } if (num9 == 4) {
                imagem9.innerHTML = '<img src="imagem/saco.png" width="160px"></img>'
            } if (num9 == 5) {
                imagem9.innerHTML = '<img src="imagem/carta.png" width="160px"></img>'
            } if (num9 == 6) {
                imagem9.innerHTML = '<img src="imagem/tigrinho.png" width="160px"></img>'
            }
        }
    }

    let select = document.querySelector('#aposta')
    let optionValue = select.options[select.selectedIndex]
    let novaAposta = optionValue.value
    let valorAposta = novaAposta
    const animar1 = document.getElementById('imagem1')
    const animar2 = document.getElementById('imagem2')
    const animar3 = document.getElementById('imagem3')
    const animar4 = document.getElementById('imagem4')
    const animar5 = document.getElementById('imagem5')
    const animar6 = document.getElementById('imagem6')
    const animar7 = document.getElementById('imagem7')
    const animar8 = document.getElementById('imagem8')
    const animar9 = document.getElementById('imagem9')

    if (num1 == num2 && num2 == num3 && num3 == num4 && num4 == num5 && num5 == num6 && num6 == num7 && num7 == num8 && num8 == num9) {
    
        if (num1 == 1) {
            res = 11.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 2) {
            res = 90 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 3) {
            res = 22.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 4) {
            res = 45 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 5) {
            res = 67.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 6) {
            res = 135 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } 
    } if (num1 == num5 && num5 == num9 && num9 == num8 && num8 == num7 && num7 == num5 && num5 == num3) {
        if (num1 == 1) {
            res = 3.75 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 2) {
            res = 30 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 3) {
            res = 7.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 4) {
            res = 15 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 5) {
            res = 22.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 6) {
            res = 45 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } 
    } if (num1 == num2 && num2 == num3 && num3 == num5 && num5 == num7 && num7 == num8 && num8 == num9) {
        if (num1 == 1) {
            res = 8.75 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 2) {
            res = 70 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 3) {
            res = 17.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 4) {
            res = 35 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 5) {
            res = 52.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 6) {
            res = 105 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } 
    } if (num1 == num2 && num2 == num3 && num3 == num5 && num5 == num7) {
        if (num1 == 1) {
            res1 = 6.25 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
        } if (num1 == 2) {
            res2 = 50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
        } if (num1 == 3) {
            res = 12.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
        } if (num1 == 4) {
            res = 25 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
        } if (num1 == 5) {
            res = 37.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
        } if (num1 == 6) {
            res = 75 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
        }
    } if (num1 == num2 && num2 == num3 && num3 == num4 && num4 == num5 && num5 == num6) {
        if (num1 == 1) {
            res = 7.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
        } if (num1 == 2) {
            res = 60 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
        } if (num1 == 3) {
            res = 15 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
        } if (num1 == 4) {
            res = 30 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
        } if (num1 == 5) {
            res = 45 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
        } if (num1 == 6) {
            res = 90 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
        }
    } if (num4 == num5 && num5 == num6 && num6 == num7 && num7 == num8 && num8 == num9) {
        if (num1 == 1) {
            res = 7.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 2) {
            res = 60 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 3) {
            res = 15 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 4) {
            res = 30 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 5) {
            res = 45 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 6) {
            res = 90 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        }

    } if (num1 == num2 && num2 == num3 && num3 == num5 && num5 == num7) {
        if (num1 == 1) {
            res1 = 6.25 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
        } if (num1 == 2) {
            res2 = 50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
        } if (num1 == 3) {
            res = 12.50 * novaAposta 
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
        } if (num1 == 4) {
            res = 25 * novaAposta
            saldoAtual += res
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
        } if (num1 == 5) {
            res = 37.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
        } if (num1 == 6) {
            res = 75 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
        } 
    } if (num1 == num2 && num2 == num3 && num3 == num5 && num9) {
        if (num1 == 1) {
            res1 = 6.25 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 2) {
            res2 = 50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 3) {
            res = 12.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 4) {
            res = 25 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 5) {
            res = 37.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 6) {
            res = 75 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } 
    } if (num1 == num5 && num5 == num9 && num9 == num8 && num8 == num7) {
        if (num1 == 1) {
            res1 = 6.25 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 2) {
            res2 = 50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 3) {
            res = 12.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 4) {
            res = 25 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 5) {
            res = 37.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 6) {
            res = 75 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        }
    } if (num3 == num5 && num5 == num7 && num7 == num8 && num8 == num9) {
        if (num1 == 1) {
            res1 = 6.25 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 2) {
            res2 = 50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 3) {
            res = 12.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 4) {
            res = 25 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 5) {
            res = 37.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 6) {
            res = 75 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } 
    } if (num1 == num5 && num5 == num9) {
        if (num1 == 1) {
            res = 3.75 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 2) {
            res = 30 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 3) {
            res = 7.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 4) {
            res = 15 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
            
        } if (num1 == 5) {
            res = 22.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 6) {
            res = 45 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        }
    } if (num3 == num5 && num5 == num7) {
        if (num3 == 1) {
            res = 3.75 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
        } if (num3 == 2) {
            res2 = 30 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
        } if (num3 == 3) {
            res3 = 7.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
        } if (num3 == 4) {
            res4 = 15 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
        } if (num3 == 5) {
            res5 = 22.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
        } if (num3 == 6) {
            res6 = 45 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha3").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha7").style.backgroundColor = 'orange'
            animar3.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar7.style.animation = 'pulsar 2s infinite'
        }
    } if (num1 == num2 && num2 == num3) { 
        if (num1 == 1) {
            res = 3.75 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
        } if (num1 == 2) {
            res = 30 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
        } if (num1 == 3) {
            res = 7.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
        } if (num1 == 4) {
            res = 15 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
        } if (num1 == 5) {
            res = 22.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
        } if (num1 == 6) {
            res = 45 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha1").style.backgroundColor = 'orange'
            document.getElementById("linha2").style.backgroundColor = 'orange'
            document.getElementById("linha3").style.backgroundColor = 'orange'
            animar1.style.animation = 'pulsar 2s infinite'
            animar2.style.animation = 'pulsar 2s infinite'
            animar3.style.animation = 'pulsar 2s infinite'
        }
    } if (num4 == num5 && num5 == num6) {
        if (num1 == 1) {
            res = 3.75 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
        } if (num1 == 2) {
            res = 30 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
        } if (num1 == 3) {
            res = 7.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
        } if (num1 == 4) {
            res = 15 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
        } if (num1 == 5) {
            res = 22.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
        } if (num1 == 6) {
            res = 45 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha4").style.backgroundColor = 'orange'
            document.getElementById("linha5").style.backgroundColor = 'orange'
            document.getElementById("linha6").style.backgroundColor = 'orange'
            animar4.style.animation = 'pulsar 2s infinite'
            animar5.style.animation = 'pulsar 2s infinite'
            animar6.style.animation = 'pulsar 2s infinite'
        } endif

    } if (num7 == num8 && num8 == num9) {
        if (num1 == 1) {
            res = 3.75 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 2) {
            res = 30 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 3) {
            res = 7.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 4) {
            res = 15 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 5) {
            res = 22.50 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        } if (num1 == 6) {
            res = 45 * novaAposta
            saldoAtual += res
            localStorage.setItem('valor', saldoAtual)
            document.getElementById('saldo').innerText = "R$" + saldoAtual.toFixed(2)
            document.getElementById("linha7").style.backgroundColor = 'orange'
            document.getElementById("linha8").style.backgroundColor = 'orange'
            document.getElementById("linha9").style.backgroundColor = 'orange'
            animar7.style.animation = 'pulsar 2s infinite'
            animar8.style.animation = 'pulsar 2s infinite'
            animar9.style.animation = 'pulsar 2s infinite'
        }


    }

}

