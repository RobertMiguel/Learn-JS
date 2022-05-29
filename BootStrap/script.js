function pegarIdade(dataNascimento) {
    const dataAtual = new Date()
    let diferenca = dataAtual.getFullYear() - dataNascimento.getFullYear()
  
    if (
      new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate()) < 
      new Date(dataAtual.getFullYear(), dataNascimento.getMonth(), dataNascimento.getDate())
      )
      diferenca--
     
    return diferenca
  }
  
  const campoDataNascimento = document.querySelector('#dataNascimento')
  const campoIdade = document.querySelector('#idade')
  
  campoDataNascimento.addEventListener('change', (e) => {
    const data = new Date(e.target.value)
  
    campoIdade.value = pegarIdade(data)
  })