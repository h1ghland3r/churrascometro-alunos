import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PrecoFormularioComponent } from '../../shared/components/preco-formulario/preco-formulario.component';
import { ScrollService } from '../../shared/services/scroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, PrecoFormularioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  welcomeMessage: string = 'Bem-vindo ao Churrascômetro!'

  constructor(private router: Router) { }

  criarChurrasco(): void {
    this.router.navigate(['churrascos/novo']);
  }
}
