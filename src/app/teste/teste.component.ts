import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollService } from '../shared/services/scroll.service';
import { ExemploPipesPipe } from '../shared/pipes/exemplo-pipes.pipe';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [CommonModule, ExemploPipesPipe],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.scss'
})
export class TesteComponent {

  devoExibirTexto: boolean = false;
  numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  botaoAtivo = true;

  items = [
    { name: 'Item 1', visible: true },
    { name: 'Item 2', visible: false },
    { name: 'Item 3', visible: true },
    { name: 'Item 4', visible: false }
  ];

  urlGoogle = 'http://www.google.com';

  hoje = new Date();

  constructor(private scrollService: ScrollService) {
  }

  scrollToTop(id: string) {
    this.scrollService.scrollToTop(id);
  }
}
