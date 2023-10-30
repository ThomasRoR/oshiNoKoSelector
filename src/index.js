const personagens = document.querySelectorAll('.personagem')
 
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top : 0, behavior: 'smooth'})
        }

        removerSelecaoDoPersonagem()

        personagem.classList.add('selecionado');

        alterarImagemPersonagemSelecionado(personagem)

        alterarNomePersonagemSelecionado(personagem)
        
        alterarDescricaoPersonagemSelecionado(personagem)

    })
})

function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem')
    descricaoPersonagem.innerText = personagem.getAttribute('data-description')
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem')
    nomePersonagem.innerText = personagem.getAttribute('data-name')
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagemGrande')
    const idPersonagem = personagem.attributes.id.value
    imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`
}

function removerSelecaoDoPersonagem() {
    const personagemSeleciondo = document.querySelector('.selecionado')
    personagemSeleciondo.classList.remove('selecionado')
}
