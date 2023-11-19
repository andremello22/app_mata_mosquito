//alert('está funcionando');
let altura=0;
let largura=0;
let vidas =1;
let tempo = 15;
let criaMosquitoTempo = 1500;


let nivel = window.location.search;
nivel = nivel.replace('?', '');
if(nivel === 'normal'){
    criaMosquitoTempo = 1500;
}
else if(nivel === 'dificil'){
    criaMosquitoTempo = 1000;


}else if(nivel === 'skylab'){
   
    criaMosquitoTempo = 750;
}


function ajustaTamanhoPalcoJogo(){
    
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}
ajustaTamanhoPalcoJogo();

let cronometro = setInterval(function(){
    tempo --;
    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criarMosquito);
        window.location.href = 'vitoria.html';

    }else{
        document.getElementById('cronometro').innerHTML = tempo;
    }   
}, 1000);

    function posicaoRandomica(){
        //remover o mosquito anterior (caso exista)
        if(document.getElementById('mosquito')){
            document.getElementById('mosquito').remove();
            if(vidas > 3){
                window.location.href = 'fim_de_jogo.html';
            }else{
                document.getElementById('v' + vidas).src = "/imagens/coracao_vazio.png";
                vidas++;
            }
           
        }
        let posicaox = Math.floor(Math.random() * largura - 90  ) ;
        let posicaoy = Math.floor(Math.random() * altura - 90 )  ;
        if(posicaox <0){posicaox=0}else{posicaox=posicaox};
        if(posicaoy <0){posicaoy=0}else{posicaoy=posicaoy};


        
        console.log(posicaox, posicaoy);

        //ciração do elemento HTML
        let mosquito = document.createElement('img');
        mosquito.src = '/imagens/mosca.png';
        mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
        mosquito.style.left = posicaox + 'px';
        mosquito.style.top = posicaoy + 'px';
        mosquito.style.position = 'absolute';
        mosquito.id = 'mosquito';
        mosquito.onclick = function(){
           this.remove();

        }

        document.body.appendChild(mosquito);
        
}


function tamanhoAleatorio(){
    let classe = Math.floor(Math.random()*3);
    switch(classe){
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random()*2);
    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
        
    }

}
