import { Component } from '@angular/core';
import { BlogComponent } from './components/blog-component/blog-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogCrypto';
}
