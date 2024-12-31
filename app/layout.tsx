import './ui/global.css';
// lo logico es que si tenemos estilos que queremos que apliquen a toda la aplicacion tendrian que ser puestos en un lugar donde se envuelva
// toda la aplicacion, por eso en este caso los ponemos en el layout que se encuentra en la raiz del proyecto, ya que este envuelve completamente
// la aplicacion
import { montserrat } from './ui/fonts'
/*
  los 'layouts' a diferencia del los 'page', son los que envuelven la pagina o por decir asi envuelven el 'page' que se encuentra en su mismo
  nivel, por lo que podriamos poner contenido que persista entre las diferentes rutas que se encuenten en niveles hijos desde la posicion
  en que se encuentre el page y layout
*/

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${montserrat.className} antialiased`}> {/* De esta manera importamos las fuentes que hayamos cargado de nextjs en nuestro archivo fonts.ts
			se puede usar la propiedad classname o style, en este caso como estamos usando classname entonces usaremos classname, el antialiased es para mejora un poco el como
			se renderiza la fuente en algunos navegadores y monitores
			*/}
				{/* <p>Contenido que podria persistir entre rutas</p> */}
				{children}
			</body> {/* ese children que se envuelve ahi vendria siendo el page que esta al nivel del layout, y si hay mas rutas
			que sean hijas del page tambien se pondran como este children de aqui, por lo que si escribimos contenido en este layout va a persistir
			en el cambio de esas rutas
			*/}
		</html>
	);
}
