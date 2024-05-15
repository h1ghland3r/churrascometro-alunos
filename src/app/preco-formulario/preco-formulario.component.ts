import { Component, OnInit } from '@angular/core';
import { ChurrascometroService } from '../shared/services/churrascometro.service';

@Component({
  selector: 'app-preco-formulario',
  standalone: true,
  imports: [],
  templateUrl: './preco-formulario.component.html',
  styleUrl: './preco-formulario.component.scss'
})
export class PrecoFormularioComponent implements OnInit {

  preco_kg_picanha = 0;

  constructor(private churrascometroService: ChurrascometroService) {

  }

  ngOnInit(): void {
    this.churrascometroService.getPrecoPicanha()
      .subscribe(
        {
          next: (resultado) => {
            console.log(resultado);
            this.preco_kg_picanha = resultado;
          },

          error: (err) => {
            console.log(err);
          }
        }
      )

    // this.churrascometroService.getPrecoPicanha()
    //   .subscribe((resultado) => {
    //     console.log(resultado);
    //   })
  }

}
