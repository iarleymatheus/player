let musicas = [
    {titulo: 'Through the Fire and Flames', artista:'Dragon Force', src: 'audio/dragon.mp3', img: 'images/dragon.jpg'} ;
    
    {titulo: 'Tiny Dancer' , artista: 'Elton John' , src: 'audio/tyni.mp3', img:'images/tiny.jpg'}; 

    {titulo: 'Imagine' , artista:'John Lennon', src: 'audio/imagine.mp3', img:'images/imagine.jpg'};
];


let musica = document.querySelector('audio');

let duracaoMusica = document.querySelector('.fim');

let imagem = document.querySelector('img');

let nomeMusica = document.querySelector('.descricao h2');

let nomeArtista = document.querySelector('.descricao i');

duracaoMusica.textContent =segundosParaminutos(Math.floor(musica.duration));




document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);




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