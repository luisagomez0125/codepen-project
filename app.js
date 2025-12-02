<!DOCTYPE html>
 <html lang="es">
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Proyecto Web</title>
    <link rel="stylesheet" href="style.css">
 </head>
 <body>
    <!-- Aquí va el encabezado de mi página -->
    <header class="encabezado">
        <div class="contenedor">
            <div class="logo">
                <img src="images/logo.svg" alt="Mi Logo">
                <span>MI PORTAFOLIO</span>
            </div>
            <nav class="menu">
                <a href="#inicio">Inicio</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#sobre-mi">Sobre Mí</a>
                <a href="#contacto">Contacto</a>
            </nav>
            <div class="botones-header">
                <button class="boton-crear">Crear</button>
                <button class="boton-buscar">Buscar</button>
                <button class="boton-entrar">Entrar</button>
                <button class="boton-registro">Registrarse</button>
            </div>
        </div>
    </header>
    <!-- Esta es la sección principal -->
    <main class="seccion-principal">
        <div class="contenedor">
            <div class="contenido-principal">
                <div class="texto-principal">
                    <h1>Bienvenido a mi <span class="texto-verde">espacio de desarrollo web</span> donde
 comparto mis proyectos.</h1>
                    <p>Este es el lugar donde muestro mi trabajo, comparto mis ideas y desarrollo mis habilidades en
 programación.</p>
                    <div class="botones-accion">
                        <button class="boton-grande-verde">Ver Proyectos</button>
                        <button class="boton-grande-borde">Saber Más</button>
                    </div>
                </div>
                <!-- Aquí pongo la ventana que simula código -->
                <div class="imagen-principal">
                    <div class="ventana-codigo">
                        <div class="barra-ventana">
                            <span class="circulo rojo"></span>
                            <span class="circulo amarillo"></span>
                            <span class="circulo verde"></span>
                            <span class="titulo-ventana">Mi primer proyecto!</span>
                        </div>
                        <div class="cuerpo-ventana">
                            <div class="lista-archivos">
                                <p class="archivo">index.html</p>
                                <p class="archivo">style.css</p>
                                <p class="archivo">script.js</p>
                            </div>
                            <div class="area-codigo">
                                <p class="linea-codigo">&lt;!DOCTYPE html&gt;</p>
                                <p class="linea-codigo">&lt;html lang="es"&gt;</p>
                                <p class="linea-codigo">&nbsp;&nbsp;&lt;head&gt;</p>
                                <p class="linea-codigo">&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Mi Página&lt;/title&gt;</p>
                                <p class="linea-codigo">&nbsp;&nbsp;&lt;/head&gt;</p>
                                <p class="linea-codigo">&nbsp;&nbsp;&lt;body&gt;</p>
                                <p class="linea-codigo">&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hola Mundo&lt;/h1&gt;</p>
                                <p class="linea-codigo">&nbsp;&nbsp;&lt;/body&gt;</p>
                                <p class="linea-codigo">&lt;/html&gt;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <!-- Pie de página -->
    <footer class="pie-pagina">
        <div class="contenedor">
            <p class="creditos">Creado por Luisa Gómez - Proyecto Final CS100 - Diciembre 2025</p>
            <div class="enlaces-footer">
                <a href="#equipo">Para Equipos</a>
                <a href="#educacion">Educación</a>
                <a href="#privacidad">Privacidad</a>
                <a href="#blog">Blog</a>
            </div>
        </div>
    </footer>
    <script src="scripts/app.js"></script>
 </body>
 </html>
