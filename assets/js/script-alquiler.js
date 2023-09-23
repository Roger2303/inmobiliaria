//importaciones//
import {propiedades_alquiler} from './data_alquiler.js'
console.log(propiedades_alquiler);
//elementos//
const propiedadesAlquiler = document.querySelector("#propiedadesAlquiler");


//funciones//
const mostrarDataEnCards = () => {
    propiedades_alquiler.forEach(propiedades => {
        console.log(propiedades);
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        card.innerHTML= `
        <div class="card">
              <img
                src= ${propiedades.src}
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${propiedades.nombre}
                </h5>
                <p class="card-text">
                  ${propiedades.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedades.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedades.habitaciones}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedades.costo}</p>
                <p class="${propiedades.smoke ? 'text-success' : 'text-danger'}">
                    <i class="${propiedades.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${(propiedades.smoke) ? 'Permitido fumar' : 'No está permitido fumar'}
                  </p>
                  <p class="${propiedades.pets ? 'text-success' : 'text-danger'}">
                    <i class="${propiedades.pets ? 'fa fa-paw' : 'fas fa-ban fa-paw'}"></i> ${(propiedades.pets) ? 'Mascotas permitidas': 'No están permitidas las mascotas' }
                  </p>
              </div>
            </div>
        `;
//insertar la card dentro del contenedor//
        propiedadesAlquiler.appendChild(card)
    })
}

//render//
mostrarDataEnCards();