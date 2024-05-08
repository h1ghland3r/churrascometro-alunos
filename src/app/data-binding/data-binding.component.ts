import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  mensagem = 'mensagem atual';

  atualizarMensagem(): void {
    this.mensagem = 'nova mensagem'
  }
}
