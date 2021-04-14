document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});

crearGaleria = () => {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement("img");
        imagen.src = `build/img/thumb/${i}.webp`;

        imagen.dataset.imagenId = i;

        //add see big image function
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('li');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

mostrarImagen = (e) => {
    const id = parseInt(e.target.dataset.imagenId);

    //generar la imagen
    const imagen = document.createElement("img");
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    // boton para cerrar la imagen
    const cerrarImagen = document.createElement('p');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    overlay.appendChild(cerrarImagen);

    //Cuando se presiona, se cierra la imagen
    cerrarImagen.onclick = function () {
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    //mostrar en el html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');


}