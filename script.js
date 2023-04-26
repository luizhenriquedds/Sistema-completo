function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    const minutos = data.getMinutes()
    const segundos = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`

    if (hora >= 0 && hora <= 12) {
        // BOM DIA!!!!
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!!!!
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!!!!
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}

setInterval(carregar, 1000)


function verificar() {
    const data = new Date()
    let ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.getElementById('res')
  
    if (fano.value.length == 0 || Number(fano.value) > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
      const fsex = document.getElementsByName('radsex')
      const idade = ano - Number(fano.value)
      let genero = ''
      const img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
          //Criança!
          img.setAttribute('src', 'foto-crianca-m.png')
        } else if (idade < 21) {
          //Jovem!
          img.setAttribute('src', 'foto-jovem-m.png')
        } else if (idade < 50) {
          img.setAttribute('src', 'foto-adulto-m.png')
        } else {
          //Idoso
          img.setAttribute('src', 'foto-idoso-m.png')
        }
      } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
          //criança
          img.setAttribute('src', 'foto-crianca-f.png')
        } else if (idade < 21) {
          //Jovem
          img.setAttribute('src', 'foto-jovem-f.png')
        } else if (idade < 50) {
          //Adulto
          img.setAttribute('src', 'foto-adulto-f.png')
        } else {
          //Idoso
          img.setAttribute('src', 'foto-idoso-f.png')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
    }
  }

  function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resu = document.getElementById('resu')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
      resu.innerHTML = 'Impossível contar!'
      window.alert('[ERRO] Faltam dados!') 
    } else {
      resu.innerHTML = 'Contando: <br>'
      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(passo.value)
      if (p <= 0) {
        window.alert('Passo inválido! considerando PASSO 1')
        p = 1
      }
      if (i < f) {
        // Contagem crescente
        for(let c = i; c <= f; c += p) {
          resu.innerHTML += `${c} \u{1F449}`
        }
      } else {
        // Contagem regressiva
        for(let c = i; c >= f; c -= p) {
          resu.innerHTML += `${c} \u{1F449}`
        }
      }
      resu.innerHTML += `\u{1F3C1}`
    }
  }


  function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
      window.alert('Por favor digite um número!')
    } else {
      let n = Number(num.value)
      let c = 1
      tab.innerHTML = ''
      while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
      }
    }
  }