import { useState, useEffect } from 'react';
import { Meta, Links, Outlet, Scripts, LiveReload, useRouteError, isRouteErrorResponse, Link, useOutletContext } from '@remix-run/react';
import styles from '~/styles/index.css';
import Header from '~/components/header';
import Footer from '~/components/footer';


export function meta() {
   return ([
        {charset:'utf-8'},
        {title:'GuitarLA - Remix'},
        {viewport:'width=device-width,initial-scale=1'}
   ]
   )
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },

        {
            rel: 'stylesheet',
            href: styles
        },

        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&family=Titillium+Web:wght@300&display=swap'
        }
    ]
}

export default function App() {

    const carritoLs = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
   const [carrito, setCarrito ] = useState(carritoLs)

   useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito) )
    }, [carrito])


   const agregarCarrito = guitarra => {
        if(carrito.some( guitarraState => guitarraState.id === guitarra.id)){
            const carritoActualizado = carrito.map(guitarraState => {
                if (guitarraState.id === guitarra.id){
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState;
            })
            setCarrito(carritoActualizado)
        } else {
            setCarrito([...carrito, guitarra]);
        }
   }

   const actualizarCantidad = guitarra  => {
        const carritoActualizado = carrito.map(guitarraState => {
            if(guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })

        setCarrito(carritoActualizado)
   }

   const eliminarGuitarra = id => {
        const carritoActualizado = carrito.filter( guitarraState => guitarraState.id !== id)
        setCarrito(carritoActualizado);
   }

   const calcularTotal = () =>{
   }

    return (
        <Document>
           <Outlet 
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra
                }}
           />
        </Document>
    )
}

function Document({children}) {
    return (
        <html lang="es">
            <head>
               <Meta /> 
               <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

// Manejo de errores 

export function ErrorBoundary(props) {
    const error = useRouteError()
    
    if(isRouteErrorResponse(error)) {
        return (
            <Document>
                <p className='error'>{error.status} {error.statusText}</p>
                <Link className='error-enlace' to="/">Volver Página Inicio</Link>
            </Document>
        )
    }
}

