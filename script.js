function cambiaSlide(idGalleria, direzione) {
    const galleria = document.getElementById(idGalleria);
    const elementi = galleria.querySelectorAll('.immagine-gioco');
    let indiceAttivo = 0;

    // Elemento attualmente attivo
    for (let i = 0; i < elementi.length; i++) {
        if (elementi[i].classList.contains('active')) {
            indiceAttivo = i;
            elementi[i].classList.remove('active');
            break;
        }
    }

    // Calcolo del nuovo indice
    let nuovoIndice = indiceAttivo + direzione;

    if (nuovoIndice >= elementi.length) {
        nuovoIndice = 0;
    }
    if (nuovoIndice < 0) {
        nuovoIndice = elementi.length - 1;
    }

    // Attiva il nuovo elemento
    elementi[nuovoIndice].classList.add('active');
}