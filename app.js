// Mi primer JavaScript para el proyecto
 console.log('Página cargada correctamente!');
 // Función para los botones - cuando paso el mouse encima
 var todosBotones = document.querySelectorAll('button');
 // Uso un for para recorrer todos los botones
 for (var i = 0; i < todosBotones.length; i++) {
    todosBotones[i].addEventListener('mouseenter', function() {
        this.style.opacity = '0.8';
    });
    todosBotones[i].addEventListener('mouseleave', function() {
        this.style.opacity = '1';
    });
 }
 // Función para los links del menú
 var linksMenu = document.querySelectorAll('.menu a');
 for (var j = 0; j < linksMenu.length; j++) {
    linksMenu[j].addEventListener('click', function(evento) {
        evento.preventDefault();
        console.log('Click en: ' + this.textContent);
        alert('Navegaste a: ' + this.textContent);
    });
 }
 // Función para seleccionar archivos
var losArchivos = document.querySelectorAll('.archivo');
 for (var k = 0; k < losArchivos.length; k++) {
    losArchivos[k].addEventListener('click', function() {
        // Primero quito el fondo de todos
        var todosArchivos = document.querySelectorAll('.archivo');
        for (var m = 0; m < todosArchivos.length; m++) {
            todosArchivos[m].style.backgroundColor = '';
        }
        // Luego pongo color al que hice click
        this.style.backgroundColor = '#262626';
        console.log('Archivo seleccionado: ' + this.textContent);
    });
 }
 // Mensaje de bienvenida
 console.log('Proyecto creado por Luisa Gómez');
 console.log('CS100 - Fundamentos de Programación');
