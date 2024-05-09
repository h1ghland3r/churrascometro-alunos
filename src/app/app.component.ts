import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TesteComponent } from './teste/teste.component';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TesteComponent, HeaderComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'churrascometro';
}
