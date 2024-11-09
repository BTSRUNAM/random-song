function mostrarCancion() {
    // Lista de canciones
    const canciones = [
        { name: "Blood Sweat and tears", artist: "BTS", link: "https://music.apple.com/ar/album/blood-sweat-tears/1596532477?i=1596532481" },
        { name: "Best of me", artist: "BTS", link: "https://music.apple.com/ar/album/best-of-me/1596529064?i=1596529067" },
        { name: "Take Two", artist: "BTS", link: "https://music.apple.com/ar/album/take-two/1690421569?i=1690421575" },
        { name: "Boy with luv ft. Halsey", artist: "BTS", link: "https://music.apple.com/ar/album/boy-with-luv-feat-halsey/1599171924?i=1599172208" },
        { name: "Butterfly (prologue mix)", artist: "BTS", link: "https://music.apple.com/ar/album/butterfly-prologue-mix/1598661880?i=1598661900" },
        { name: "Your eyes tell", artist: "BTS", link: "https://music.apple.com/ar/album/your-eyes-tell/1517969553?i=1517969731" },
        { name: "Not today", artist: "BTS", link: "https://music.apple.com/ar/album/not-today/1596528839?i=1596529383" },
        { name: "Look Here", artist: "BTS", link: "https://music.apple.com/ar/album/look-here/1597016856?i=1597017528" },
        { name: "Like", artist: "BTS", link: "https://music.apple.com/ar/album/like/1596528414?i=1596528633" }
    ];

    // Seleccionar una canción aleatoria
    const indiceAleatorio = Math.floor(Math.random() * canciones.length);
    const cancionSeleccionada = canciones[indiceAleatorio];

    // Mostrar la canción en la página con el enlace clickable
    const cancionDisplay = document.getElementById("cancion");
    cancionDisplay.innerHTML = `
        <p><a href="${cancionSeleccionada.link}" target="_blank">${cancionSeleccionada.name} - ${cancionSeleccionada.artist}</a></p>
    `;
}
