/* Los layouts pueden ser utilizados en cualquier parte que queramos de nuestra aplicacion, para hacer que partes de nuestras paginas se mantenga
persistentes solo dentro de un grupo de rutas, y que al estar fuera entonces no se muestre ese contenido persistente */

import SideNav from "../ui/dashboard/sidenav";

/* En este caso, este layout que esta dentro de dashboard solo va a aplicar para las rutas dentro de la pagina dashboard, pero si salimos
a la raiz no se vera el contenido de este layout */

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}