let msc = document.querySelector("audio");
let duracaoMusica = document.querySelector(".fim");
document.querySelector(".anterior").addEventListener('click',()=>{
    renderMsc();
});
document.querySelector(".proximo").addEventListener('click', ()=>{
    renderMsc();
});
duracaoMusica.textContent = segundosParaMinutos(Math.floor(msc.duration));
let img = document.querySelector("img");
let musicas = [
    {titulo:'Perfume', artista:'Mano Big', src:'./msc/manobigperfume.mp3', img:'imagens/rock.jpg'},
    {titulo:'Pronto pro perigo', artista:'Mano Big', src:'./msc/manobigprontoproperigo.pm3', img:'img/samba.jpg'},
    {titulo:'Trem Bala', artista:'Mano Big', src:'./msc/manobigtrembala.mp3', img:'img/piano.jpg'}
];
let nomeMsc = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector("descricao i");
let indexMusica = 0;

document.querySelector(".botao-play").addEventListener('click', tocarMusica);
document.querySelector(".botao-pause").addEventListener('click',pausarMusica);
msc.addEventListener('timeupdate',atualizarBarra);
function tocarMusica() {
    msc.play();
    
}
function pausarMusica() {
    msc.pause();
}
function atualizarBarra() {
    let barra = document.querySelector("progress");
    barra.style.width = Math.floor((msc.currentTime / msc.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector(".inicio");
    tempoDecorrido.textContent = Math.floor(msc.currentTime);
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}
function renderizarMusica(index){
    msc.setAttribute('src', musicas[index].src);
    msc.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        img.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(msc.duration));
    });
}