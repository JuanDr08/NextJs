/* De esta manera acabamos de crear una ruta dentro de la aplicacion llamada dashboard, esta forma de enrutado se le llama file system routing
Algo que podemos observar es como el contenido que habiamos agregado al layout sigue persistiendo en esta pagina aunque ya
hayamos cambiado de pagina entre la de la raiz y esta de dashboard */

import { fetchLatestInvoices, fetchRevenue } from "../lib/data";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { lusitana } from "../ui/fonts";


export default async function Page() { /*  Las rutas deben devolver un export default, el nombre no importa */

    /* useEffect(() => { el problema de hacer fetc en react de estas maneras es que react realiza los fetching en el lado del cliente, cuando
    en realidad es que podriamos hacer los fetching de datos desde nuestro servidor, ya que siempre va a ser mejor que sea nuestro servidor
    el que realize el fetching de datos
        fetch("/api/dashboard/customers")
    }, []); */

    // Por defecto los componentes de nextjs se renderizan de el lado del servidor, y esto es lo que se le llama react server component, algo
    // interesante de estos componentes es que pueden ser asincronos, por lo que podriamos poner un await y hacer fetch de lo que queramos dentro
    // componente

    /* const res = await fetch("https://api.example.com");
    const json = await res.json(); // esto solo funciona en los react server components */

    const revenue = await fetchRevenue();
    // console.log(revenue); // Este console.log funciona en el servidor donde hemos hecho el fetch, por lo que el resultado se vera reflejado
    // en la terminal y no en el navegador ya que el fetch se hace antes de ser mandado al cliente

    const latestInvoices = await fetchLatestInvoices();

    // el streaming de datos para hacerlo basicamente deberiamos mover los fetch de manera granular internamente dentro de cada componente que lo necesite, no hacerlo desde la pagina
    // como en este caso sino que moverlos dentro de cada componente y envolver los componentes en un Suspense, de esta manera podriamos colocar un efecto de carga y que los componentes
    // se vayan mostrando a medida que se cargan los datos

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
                {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
                {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
                {/* <Card
                    title="Total Customers"
                    value={numberOfCustomers}
                    type="customers"
                /> */}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <RevenueChart revenue={revenue}  /> {/* Envolverlos dentro de un suspense para que se carguen los datos de manera asincrona y hacer streaming de los datos */}
                <LatestInvoices latestInvoices={latestInvoices} />
            </div>
        </main>
    );
}