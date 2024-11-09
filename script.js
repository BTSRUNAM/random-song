function mostrarCancion() {
    // Lista de canciones
    const canciones = [
        "Song 1 - Artista 1",
        "Song 2 - Artista 2",
        "Song 3 - Artista 3",
        "Song 4 - Artista 4",
        "Song 5 - Artista 5"
    ];

    // Seleccionar una canción aleatoria
    const indiceAleatorio = Math.floor(Math.random() * canciones.length);
    const cancionSeleccionada = canciones[indiceAleatorio];

    // Mostrar la canción en la página
    document.getElementById("cancion").innerText = cancionSeleccionada;
}
