# NextJs

- NextJs es un framework de React para crear aplicaciones web.
- Este repo esta usando un ejemplo del tutorial de la web oficial de NextJs.

Estaremos usando typescript y tsx para el desarrollo de la aplicación, ademas de tambien utilizar tailwindcss para facilitar la creación de estilos.

- La carpeta 'app' es la raiz del proyecto y por lo tanto se ve reflejado en las rutas del navegador al ser el equivalente a la ruta '/'
ya que en nextjs las rutas se montan en funcion de la organizacion de las carpetas, cada que queramos crear una ruta deberemos crear una carpeta dentro de app y dentro de esa carpeta deberemos crear un archivo page.tsx, de tal modo que si quisieramos crear una ruta de personas tendria que quedar un orden asi ./app/personas/page.tsx, de esa manera en el navegador se vera reflejado en la ruta '/personas'

- NextJs nos facilitara muchisimo la vida en numerosas cosas, entre ellas la carga de fuentes, dirigirse al app/ui/fonts

- NextJs tiene un monton de hooks que nos permiten acceder a informacion de la ruta

- NextJs por defecto todos los archivos o componentes que creamos se generan en el lado del servidor, por lo que al momento de estarlos cargando, no existen concepts del frontend como el localstorage, los pathname, etc, esto es mas un concepto de react, hay componentes que se renderizan en el lado del servidor y otros en el lado del cliente, con next por defecto todos se generan del lado del servidor, por lo que si en algun componente requerimos usar propiedades del frontend deberemos hacer que next haga que dicho componente se genere del lado del cliente, esto se hace usando la palabra reservada 'use client' al inicio del archivo, de esta manera el componente se generara del lado del cliente y tendremos acceso a propiedades del frontend

- Con los componentes Link, lo que hace Next al detectar de que hay un link dentro del viewport es precargar ese destino/pagina para cargarlo mas rapido cuando el usuario le de click

Como tal la magia de NextJs es el server side rendering, ya que nos deja libertad con el ordenamiento de archivos para las rutas y el hecho de que los componentes se carguen del lado del servidor, lo que nos brinda mayor eficiencia en nuestras aplicaciones, ya que siempre sera mejor cargarlo todo desde el lado del servidor para que el cliente tenga mayor fluidez

- Entre sus archivos especiales como page o layout tambien tenemos uno llamado loading.tsx, que se muestra cuando esta cargando una pagina 