import { Component } from '@angular/core';
import { FilhoComponent } from '../filho/filho.component';

@Component({
  selector: 'app-pai',
  standalone: true,
  imports: [FilhoComponent],
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.scss'
})
export class PaiComponent {
  textoDoPai: string = 'Olá, Filho!'
  valor = 0;

  recebeValor(valorAIncrementar: number): void {
    if (valorAIncrementar) {
      this.valor += valorAIncrementar;
      //this.valor = valorAIncrementar;
    }
  }
}
