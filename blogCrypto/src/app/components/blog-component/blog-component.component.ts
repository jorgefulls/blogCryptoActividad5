import { Component, signal } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-blog-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog-component.component.html',
  styleUrl: './blog-component.component.css'
})

export class BlogComponent {
  // Array de posts del blog, que inicialmente tendrá 2 noticias y cumplirá con el esquema definido en el interfaz IPost
  posts: IPost[] = [{
                     titulo : "XRP. El esperado resurgir en 2025",
                     imagen : "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
                     texto : "La esperada decisión de la SEC sobre la demanda interpuesta a XRP está a punto de llegar. \
                              Esto significará un antes y un después en la historia de XRP y prácticamente de todo el \
                              mercado cripto",
                     fechaPublicacion: "2025-02-22"
                    },
                    {
                      titulo: "BTC. Con paso firme hacia los 150K",
                      imagen : "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
                      texto : "La evolución de Bitcoin a lo largo de los últimos años como valor refugio es imparable. \
                              Cada vez son más los inversores que confían en este activo para incrementar la diversidad \
                              de sus productos de inversión. En los últimos años, grandes fondos de inversión han aparecido \
                              en escena y esto favorecerá al valor de cotización de BTC, sin duda.",
                      fechaPublicacion: "2025-02-22"
                    }]

  // Propiedades a utilizar con property binding para definir aspectos visuales y el contador de posts del blog.
  property_color_texto: string = "color_texto_rojo"   // el valor del color "color_texto_rojo" será una clase que estará definida en los estilos del componente
  property_img_size: string = "image_size"
  contadorPosts = signal<number>(0)

  // El formulario estará enganchado con property binding al siguiente objeto
  postFormulario: IPost = {
    titulo : "BTC",
    imagen : "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
    texto : "Desarrollo de la nueva noticia a incluir en el blog",
    fechaPublicacion : "2025-02-22"
  }


  validarCamposFormulario() {
    let todoRelleno = true
    // Si alguno de los campos del formulario no está relleno, este no cumplirá la validación con éxito.
    if ((this.postFormulario.titulo === "") || (this.postFormulario.imagen === "") || (this.postFormulario.texto === "") || (this.postFormulario.fechaPublicacion === "")) {
      todoRelleno = false
    }
    return todoRelleno
  }

  addPost() {
    if (this.validarCamposFormulario()) {
      // Añado el nuevo post al array de Posts
      const nuevoObjeto = { ...this.postFormulario };
      this.posts.push(nuevoObjeto)
    } else {
      // Advierto al usuario de que el formulario no está completo y no añade nada al array de Posts
      alert("¡TODOS los campos del formulario se tienen que rellenar para poder crear la nueva entrada!")
    }
  }

  ngOnInit() {
    // Inicializo el contador de posts y le asigno el valor correspondiente a la cantidad de elementos disponibles en el array de Posts
    this.contadorPosts.set(0)
    this.contadorPosts.set(this.posts.length)
  }

  ngDoCheck() {
    // Actualizo la vista con el número actual de posts del blog
    this.contadorPosts.set(this.posts.length)
  }

}
