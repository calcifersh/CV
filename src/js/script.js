/* HEADER */

const CONTACTO = document.getElementById('contacto');
const SOBREMI = document.getElementById('sobremi');
const HABILIDADES = document.getElementById('habilidades');
const EXPERIENCIA = document.getElementById('experiencia');
const ESTUDIOS = document.getElementById('estudios');
const FORMATO_PDF = document.getElementById('formatoPDF');

CONTACTO.addEventListener('mouseover', function() {
    try {
        CONTACTO.classList.remove('text-bg-dark');
    }catch(style_error){}
    CONTACTO.style.backgroundColor = 'grey';
    CONTACTO.style.cursor = 'pointer';
  });

CONTACTO.addEventListener('mouseout', function() {
    CONTACTO.classList.add('text-bg-dark');
});

SOBREMI.addEventListener('mouseover', function() {
    try {
        SOBREMI.classList.remove('text-bg-dark');
    }catch(style_error){}
    SOBREMI.style.backgroundColor = 'grey';
    SOBREMI.style.cursor = 'pointer';
  });

SOBREMI.addEventListener('mouseout', function() {
    SOBREMI.classList.add('text-bg-dark');
});

HABILIDADES.addEventListener('mouseover', function() {
    try {
        HABILIDADES.classList.remove('text-bg-dark');
    }catch(style_error){}
    HABILIDADES.style.backgroundColor = 'grey';
    HABILIDADES.style.cursor = 'pointer';
  });

HABILIDADES.addEventListener('mouseout', function() {
    HABILIDADES.classList.add('text-bg-dark');
});

EXPERIENCIA.addEventListener('mouseover', function() {
    try {
        EXPERIENCIA.classList.remove('text-bg-dark');
    }catch(style_error){}
    EXPERIENCIA.style.backgroundColor = 'grey';
    EXPERIENCIA.style.cursor = 'pointer';
  });

EXPERIENCIA.addEventListener('mouseout', function() {
    EXPERIENCIA.classList.add('text-bg-dark');
});

ESTUDIOS.addEventListener('mouseover', function() {
    try {
        ESTUDIOS.classList.remove('text-bg-dark');
    }catch(style_error){}
    ESTUDIOS.style.backgroundColor = 'grey';
    ESTUDIOS.style.cursor = 'pointer';
  });

ESTUDIOS.addEventListener('mouseout', function() {
    ESTUDIOS.classList.add('text-bg-dark');
});

FORMATO_PDF.addEventListener('mouseover', function() {
    try {
        FORMATO_PDF.classList.remove('text-bg-dark');
    }catch(style_error){}
    FORMATO_PDF.style.backgroundColor = 'grey';
    FORMATO_PDF.style.cursor = 'pointer';
  });

FORMATO_PDF.addEventListener('mouseout', function() {
    FORMATO_PDF.classList.add('text-bg-dark');
});

/* MAIN CARD */

try {
    const FOTO_MAIN = document.getElementById('foto_main');
    FOTO_MAIN.style.border = '2px white solid'
} catch (style_error) {}

/* CONTACTO */

    function onSubmit(token) {
        document.getElementById("demo-form").submit();
    }


try {
    const divformulario = document.getElementById('formulario');
    const btnConfirmar = document.getElementById('btnconfirmar');
    const capcha = document.getElementById('capcha');
    
    btnConfirmar.addEventListener("click", function() {
        divformulario.classList.add('disabled');
        capcha.classList.remove('disabled')
    });
}catch(disablederror){}







