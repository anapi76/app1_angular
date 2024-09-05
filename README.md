### Actividad 1:
Tarea: Crear las vistas: view-one y view-two y el componente footer.
### Actividad 2.
Tarea: Crear un componente header compuesto por el contenido incluido en los divs cuyas clases son navigation, banner y content. Se implementará el siguiente evento: en el div con la clase navigation se implementarán dos links, cada uno de ellos permitirá navegar a una de las vistas generadas en la actividad anterior. De este modo, al hacer click sobre uno de los dos enlaces, se accederá a su vista asociada y además, cambiará el siguiente contenido: el formato del texto del enlace del dic con la clase navigation y la imagen de fondo y el título de segundo nivel del div con la clase banner.
### Actividad 3.
Tarea: Crear un componente Content donde parametrices el contenido de uno de los divs de la clase photo. De este modo, a partir del componente Content –cuyo contenido quedará englobado en un único div con clase photo-, se establecerá una comunicación de datos con su componente padre viewOne. En la vista viewOne el componente Content se renderizará dos veces.
En cada uno de los dos componentes Content deberás implementar el siguiente evento: al hacerse click sobre cualquiera de las fotos, la imagen pasará a ocupar todo el div y, si se vuelve a pulsar sobre la imagen agrandada, se volverá al estado anterior.
Si volvemos a hacer click sobre la imagen, se volverán a mostrar otra vez las dos imágenes anteriores. Deberás crear cuantas al menos una interfaz para tratar la información desde el componente padre –la vista viewOne-.
### Actividad 4.
Tarea: en la vista viewTwo deberás instanciar el componente Content creado en la actividad anterior, de modo que se muestren 2 imágenes
Deberás implementar el siguiente evento: cuando se haga click sobre la imagen izquierda, se realizará una petición a la API REST pública de Rick & Morty y se mostrarán todos los personajes con el nombre Rick y sus imágenes. Si se pulsa sobre la izquierda, se mostrará el mismo contenido pero para el personaje de Morty. Los resultados se mostrarán a partir del componente Content.
