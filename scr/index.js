const personagens = document.querySelectorAll('.personagem')
 
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top : 0, behavior: 'smooth'})
        }

        const personagemSeleciondo = document.querySelector('.selecionado')
        personagemSeleciondo.classList.remove('selecionado')

        personagem.classList.add('selecionado');

        const imagemPersonagemGrande = document.querySelector('.personagemGrande')
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = "/scr/card/card-" + (idPersonagem) + ".png";

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
})