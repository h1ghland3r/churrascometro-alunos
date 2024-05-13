import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TesteComponent } from './teste/teste.component';
import { MatButtonModule } from '@angular/material/button';
import { DataBindingComponent } from './data-binding/data-binding.component';
import pt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { PaiComponent } from './pai/pai.component';
import { CiclosDeVidaComponent } from './ciclos-de-vida/ciclos-de-vida.component';

registerLocaleData(pt);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataBindingComponent, TesteComponent, MatButtonModule, PaiComponent, CiclosDeVidaComponent],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pt'
    }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'churrascometro';
  novaMensagem = 'minha nova mensagem';
  mensagemDoPai = true;

  alterarTexto(): void {
    this.mensagemDoPai = !this.mensagemDoPai;
  }
}
