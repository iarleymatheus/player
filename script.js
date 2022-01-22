let musicas = [
    {titulo:'Tiny Dancer' , artista: 'Elton John' , src:'audio/tyni.mp3', img:'./images/tiny.jpg'},
    {titulo:'Imagine' , artista:'John Lennon', src:'audio/imagine.mp3', img:'./images/imagine.jpg'},
    {titulo:'Unstoppable', artista:'Sia', src:'audio/sia.mp3', img:'./images/sia.jpg'},
    {titulo:'Enemy', artista:'Imagine Dragons x J.I.D ', src:'audio/enemy.mp3', img:'./images/enemy.jpg'},
    {titulo:'Dusk Till Dawn', artista:'ZAYN ft. Sia', src:'audio/zyan.mp3', img:'./images/zyan.jpg'},
]


let musica = document.querySelector('audio');

let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');

let imagem = document.querySelector('img');

let nomeMusica = document.querySelector('.descricao h2');

let nomeArtista = document.querySelector('.descricao i');



renderizarMusica(indexMusica);

// Eventos

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    renderizarMusica(indexMusica);
    if (indexMusica < 0){
        indexMusica = 4;
    }
    
} );

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    renderizarMusica(indexMusica);
    if(indexMusica > 4){
       indexMusica = 0;

    }
    
} );


// Funcoes

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaminutos(Math.floor(musica.duration));
        
    });


}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';

}

function pausarMusica(){
    musica.pause();
    
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
  let barra = document.querySelector('progress');
  barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
  let tempoDecorrido = document.querySelector('.inicio');
  tempoDecorrido.textContent =segundosParaminutos(Math.floor(musica.currentTime));

}

function segundosParaminutos(segundos){
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10){
     campoSegundos = '0' + campoSegundos;

  }
return campoMinutos+':'+campoSegundos;
}
