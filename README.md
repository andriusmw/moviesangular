# Página web de películas tipo Netflix, Disney+ ...

Este es un proyecto para el bootcamp de programación en Angular y Front-End, de Geekshubs Academy en 2022.

El proyecto es una página web de películas similar a Netflix, Disney+ ( con pago para ver) que se conecta a la API
TheMovieDB para obtener los datos de las películas y series a mostrar.

La página en sí nos muestra una interfaz donde podemos hacer las siguientes acciones:
1-Nos lista las películas populares
2-Podemos buscar una película por Nombre
3-Podemos ver los detalles de la película seleccionada ya sea de las buscadas por nombre o de las listadas
por popularidad.
4-Podemos hacer el punto 2 y 3 con series también en vez de con películas.

Cabe destacar que en la vista detalle hay puesto un reproductor de vídeo a modo de prueba como que se podrían
reproducir los vídeos de las películas, PERO como queremos que sea legal, pues el usuario tendría que tener
un plan de subscripción para que el vídeo se viera correctamente, en este caso, mostramos mediante alert el mensaje
al usuario de que debe de susbscribirse para ver el vídeo, así mismo, el vídeo se detiene cuando aparece el mensaje.

Otra posible solución, para este mismo proyecto sería usar otra API que nos permita listar opciones legales para ver las películas.

### Pre-requisitos 📋

Visual Studio Code
Tener instalado NPM para poder usar Angular

## Comenzando 🚀

Para usar esta página tan solo es necesario descargar el repositorio, extraer el contenido, abrirlo con Visual studio code
y ejecutar "ng serve --open"

## Funcionamiento

La página tiene varios componentes;

- El navbar: donde van los enlaces para ir a varias partes de la página pasando a su vez por el
  app-routing.module.ts

- El componente Home: Este es el primero que veremos al abrir la página, nos redirecciona a este.
  En este componente podemos ver las películas más populares.
  Esto es posible mediante una llamada a la API, usando el servicio: trending.service.ts que se llama
  al cargar la página.

- El componente Search: En este componente podemos buscar películas por nombre.
  Esto es posible gracias al servicio movies.service.ts que llama a la API
  y lo hace cuando hacemos click en el botón de buscar.

* El componente Details: Este componente se carga cuando hacemos click en "ver detalles" en una película.
  Llama a la API y nos devuelve datos de la película, así mismo estos datos se muestran en /details/:id
  mostrando así los datos en una página distinta de donde estábamos. Esto es posible gracias al servicio
  movies-details.service.ts

* Existe una copia del componente Search y Details para las series llamadas SeriesSearch y SeriesDetails
  que funcionan exactamente igual que las anteriores.
* El footer: Su función es mostrar un texto al final de la página con el autor y unos enlaces.

## Ejecutando las pruebas ⚙️

En los servicios MOVIE.SERVICE.TS , TRENDING.SERVICE.TS Y MOVIES-DETAILS.SERVICE.TS encontraréis varias endpoints
que se pueden pegar en el navegador y comprobar un JSON que nos devuelve la API a la que se conecta.

## Construido con 🛠️

Visual Studio Code
Bootstrap

## Autores ✒️

Andrius MW Front-End Web-Developer
linkedIN: https://www.linkedin.com/in/andresgl94/

## Licencia 📄

Este proyecto es para uso doméstico y pruebas de estudiantes.

## Expresiones de Gratitud 🎁

Agradecimientos a San Google, Santo You Tube y Paco de GeekHubs Academy.
