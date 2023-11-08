import imagen from '../../public/img/nosotros.jpg';
import styles from '~/styles/nosotros.css';

export function meta() {
    return ([
         {title:'GuitarLA - Sobre Nosotros'},
         {description:'Venta de guitarras, cursos, blog de musica'}
    ]
    )
 }

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        } 
    ]
}

function Nosotros() {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>
            <div className="contenido">
                <img src={imagen} alt='imagen sobre nosotros' />
                <div>
                    <p>Desde sus modestos inicios, GuitarLa ha estado inmersa en el apasionante mundo de la música. Fundada por amantes de la música y expertos en instrumentos, nuestra empresa se ha convertido en un destino para todos aquellos que buscan explorar y enriquecer su vida a través del arte de tocar un instrumento y la magia de la música.</p>

                    <p>La semilla de GuitarLa se plantó con la visión de crear un espacio donde la música fuera el lenguaje universal que todos pudieran comprender y disfrutar. Iniciamos nuestro camino con un puñado de guitarras y una pasión desbordante por transmitir conocimiento musical a través de la enseñanza. A lo largo de los años, nuestro compromiso con la calidad y la excelencia nos ha llevado a expandir nuestra oferta, incorporando una amplia variedad de instrumentos musicales, desde guitarras y bajos hasta teclados y percusión.</p>

                    <p>Pero GuitarLa no es solo una tienda de instrumentos; es un lugar donde los sueños musicales cobran vida. Nuestra misión es inspirar y nutrir a músicos de todas las edades y niveles, proporcionando no solo los mejores instrumentos, sino también la educación y el apoyo necesarios para que florezcan. Nuestros cursos de música son impartidos por talentosos profesores que comparten su experiencia y conocimiento, guiando a nuestros estudiantes en su viaje musical.</p>
                </div>
            </div>
        </main>
    )
}


export default Nosotros;