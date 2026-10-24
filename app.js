/* 1. PLAYLIST OREDEM : Delulu - KiiiKiii, 404 (New Era) - KiiiKiii,
 Candy Pink Magic Hole Flip Phone -KiiiKiii, Blah Blah Blah -R2,
 エレクトロ・ワールド (Electro World) - Perfume */

 const playlist = [
    {
        titulo: "Delulu",
        subtitulo: "KiiiKiii",
        track: "001",
        album: "Delulu Park",
        arquivo: "music/delulu.mp3"
    },
    {
        titulo: "404 (New Era)",
        subtitulo: "KiiiKiii",
        track: "002",
        album: "Delulu Park",
        arquivo: "music/404_(new_era).mp3"
    },
    {
        titulo: "Candy Pink Magic Hole Flip Phone",
        subtitulo: "KiiiKiii",
        track: "003",
        album: "WhyKiiiKiii",
        arquivo: "music/candy_pink_magic_hole_flip_phone.mp3"
    },
    {
        titulo: "Blah Blah Blah",
        subtitulo: "R2",
        track: "004",
        album: "Blah Blah Blah",
        arquivo: "music/blah_blah_blah.mp3"
    },
    {
     titulo: "エレクトロ・ワールド (Electro World)", 
        subtitulo: "Perfume", 
        track: "005", 
        album: "Electro World",
        arquivo: "music/electro_world.mp3"    
    }
 ];

 let musicaAtualIndex = 0;
 let estaTocando = false;

 const btnPlay = document.getElementById("btn-play");
 const btnVoltar = document.querySelector(".cyber-controls button:first-child"); 
 const btnAvancar = document.querySelector(".cyber-controls button:nth-child(3)");


 const tituloTela = document.querySelector(".music-title");
 const subtituloTela = document.querySelector(".music-subtitle");
 const infoTela = document.querySelector(".track-info");
 const numeroTela = document.querySelectorAll(".screen-footer span")[1];
 const cdPlayer = document.querySelector(".cd-player");
 const audioPlayer = document.getElementById("audio-player");

 function carregarMusica(index) {
    const musica = playlist[index];
    tituloTela.textContent = musica.titulo;
    subtituloTela.textContent = musica.subtitulo;
    infoTela.textContent = musica.album;
    numeroTela.textContent = musica.track;
    audioPlayer.src = musica.arquivo;
 }

 function alternarPlay() {
    if (estaTocando) {
        estaTocando = false;
        btnPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
        cdPlayer.classList.remove("cd-girando");
        audioPlayer.pause();
    } else {
        estaTocando = true;
        btnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
        cdPlayer.classList.add("cd-girando");
        audioPlayer.play();
    }
 }

 function avancarMusica() {
    musicaAtualIndex = (musicaAtualIndex + 1) % playlist.length;
    carregarMusica(musicaAtualIndex);
    if (estaTocando) {
        audioPlayer.play();
    }
 }

 function voltarMusica() {
    musicaAtualIndex = (musicaAtualIndex - 1 + playlist.length) % playlist.length;
    carregarMusica(musicaAtualIndex);
    if (estaTocando) {
        audioPlayer.play();
    }
 }

 btnPlay.addEventListener("click", alternarPlay);
 btnAvancar.addEventListener("click", avancarMusica);
 btnVoltar.addEventListener("click", voltarMusica);
 audioPlayer.addEventListener("ended", voltarMusica); // para seguir para a proxima musica automaticamente.


 carregarMusica(musicaAtualIndex);


 //ANIMAÇÃO NO TITULO DAS MUSICAS

 function carregarMusica(index) {
    const musica = playlist[index];
    
    // Reseta a animação ao trocar de faixa
    tituloTela.classList.remove("marquee");
    
    tituloTela.textContent = musica.titulo;
    subtituloTela.textContent = musica.subtitulo;
    infoTela.textContent = musica.album;
    numeroTela.textContent = musica.track;
    audioPlayer.src = musica.arquivo;

    // Aguarda o render da tela para calcular os tamanhos
    setTimeout(() => {
        const containerWidth = tituloTela.parentElement.clientWidth;
        const textoWidth = tituloTela.scrollWidth;

        // Só ativa o movimento se o texto for maior que o visor
        if (textoWidth > containerWidth) {
            tituloTela.classList.add("marquee");
        }
    }, 50);
}