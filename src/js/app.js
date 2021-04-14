document.addEventListener('DOMContentLoaded', function() {
    scrollNav();
    navegacionFija();
});

scrollNav = () => {
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    
    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // console.log(enlaces);
}

navegacionFija = () => {
    const barra = document.querySelector('.header');

    //Registrar el IntersectionObserver
    const observer = new IntersectionObserver( function(entries) {
        
        if (entries[0].isIntersecting) {
            barra.classList.remove('fijo');
            // console.log('visible');
        } else {
            barra.classList.add('fijo');
            // console.log('no visible');
        }
    });
    //Elemento a observar
    observer.observe(document.querySelector('.sobre-festival'));
}