document.addEventListener("DOMContentLoaded",(function(){scrollNav(),navegacionFija()})),scrollNav=()=>{document.querySelectorAll(".navegacion-principal a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))}))},navegacionFija=()=>{const e=document.querySelector(".header");new IntersectionObserver((function(t){t[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")})).observe(document.querySelector(".sobre-festival"))},document.addEventListener("DOMContentLoaded",(function(){crearGaleria()})),crearGaleria=()=>{const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("img");n.src=`build/img/thumb/${t}.webp`,n.dataset.imagenId=t,n.onclick=mostrarImagen;const a=document.createElement("li");a.appendChild(n),e.appendChild(a)}},mostrarImagen=e=>{const t=parseInt(e.target.dataset.imagenId),n=document.createElement("img");n.src=`build/img/grande/${t}.webp`;const a=document.createElement("div");a.appendChild(n),a.classList.add("overlay");const o=document.createElement("p");o.textContent="X",o.classList.add("btn-cerrar"),a.appendChild(o),o.onclick=function(){a.remove(),c.classList.remove("fijar-body")};const c=document.querySelector("body");c.appendChild(a),c.classList.add("fijar-body")};
//# sourceMappingURL=bundle.js.map