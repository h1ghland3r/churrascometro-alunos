import { Component } from '@angular/core';
import { ScrollService } from '../../shared/services/scroll.service';
import { PrecoFormularioComponent } from '../../shared/components/preco-formulario/preco-formulario.component';

@Component({
  selector: 'app-criacao-churrasco',
  standalone: true,
  imports: [PrecoFormularioComponent],
  templateUrl: './criacao-churrasco.component.html',
  styleUrl: './criacao-churrasco.component.scss'
})
export class CriacaoChurrascoComponent {
  constructor(private scrollService: ScrollService) { }

  rolarToSection(id: string): void {
    this.scrollService.scrollToTop(id);
  }
}
