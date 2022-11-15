function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

        

    if (elemento != null && elemento.localName === 'audio') {
            elemento.play();
        
    }
    else{
        alert("Elemento ou seletor inválido");
    }
 
    //console.log('Elemento não encontrado'); (ASSIM FICA MAIS DISCRETO)

    // && SIGNIFICA E OU AND

    // !=  SIGNIFICA DIFERENTE
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0 (isso era usado no WHILE)


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const IdAudio = `#som_${instrumento}`;

    //console.log(IdAudio); (USADO APENAS PARA AFERIÇÃO)

    tecla.onclick = function(){
        tocaSom(IdAudio)
    };

    //contador = contador + 1; (isso era usado quando tinha WHILE)

    //console.log(contador);(USADO APENAS PARA AFERIÇÃO)

    tecla.onkeydown = function(evento){

        console.log(evento.code);
        
        if(evento.code == 'Space' || evento.code == 'Enter' || evento.code == 'NumpadEnter'){
            tecla.classList.add("ativa");
        }

    }

    tecla.onkeyup = function(){
        tecla.classList.remove("ativa");
    }

    // a teclas || significam OU 



}
