import { Component, signal } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { CommonModule } from '@angular/common'; // Importación necesaria
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-blog-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog-component.component.html',
  styleUrl: './blog-component.component.css'
})

export class BlogComponent {
  posts: IPost[] = [{
                     titulo : "XRP. El esperado resurgir en 2025",
                     imagen : "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
                     texto : "La esperada decisión de la SEC sobre la demanda interpuesta a XRP está a punto de llegar. \
                              Esto significará un antes y un después en la historia de XRP y prácticamente de todo el \
                              mercado cripto",
                     fechaPublicacion: "22/02/2025"
                    },
                    {
                      titulo: "BTC. Con paso firme hacia los 150K",
                      imagen : "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
                      texto : "La evolución de Bitcoin a lo largo de los últimos años como valor refugio es imparable. \
                              Cada vez son más los inversores que confían en este activo para incrementar la diversidad \
                              de sus productos de inversión. En los últimos años, grandes fondos de inversión han aparecido \
                              en escena y esto favorecerá al valor de cotización de BTC, sin duda.",
                      fechaPublicacion: "22/02/2025"
                    }]

  property_color_texto: string = "color_texto_rojo"   // el valor del color "color_texto_rojo" será una clase que estará definida en los estilos del componente
  property_img_size: string = "image_size"
  contadorPosts = signal<number>(0)

  postFormulario: IPost = {
    titulo : "BTC",
    imagen : "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
    texto : "Desarrollo de la nueva noticia a incluir en el blog",
    fechaPublicacion : "2025-02-22" // Cualquier fecha por defecto
  }


  addPost() {
    console.log(this.postFormulario)
  }

  ngOnInit() {
    this.contadorPosts.set(0)
    this.contadorPosts.set(this.posts.length)
  }
}
