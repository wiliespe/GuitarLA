import { useLoaderData } from '@remix-run/react';
import { getPosts } from '~/models/post.server';
import ListadoPosts from '~/components/listado-posts';
import styles from '~/styles/blog.css';

export function meta() {
    return ([
         {title:'GuitarLA - Blog'},
         {description:'Venta de guitarras, cursos, blog de musica'}
    ]
    )
 }

export function links() {
    return [
        { 
          rel: "stylesheet", 
          href: styles 
        }
      ];
}

export async function loader() {
    const posts = await getPosts();
    
    return posts.data 
}

function Blog() {
    const posts = useLoaderData()
    return (
        <main className="contenedor">
          <ListadoPosts 
            posts= {posts}
          />
        </main>
    )
}


export default Blog;