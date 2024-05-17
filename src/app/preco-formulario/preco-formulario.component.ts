import { Component, OnInit } from '@angular/core';
import { ChurrascometroService } from '../shared/services/churrascometro.service';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';


@Component({
  selector: 'app-preco-formulario',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatStepperModule, FormsModule, ReactiveFormsModule],
  templateUrl: './preco-formulario.component.html',
  styleUrl: './preco-formulario.component.scss'
})
export class PrecoFormularioComponent implements OnInit {

  formPessoas!: FormGroup;
  formCarnes!: FormGroup;
  formBebidas!: FormGroup;

  preco_picanha = 0;
  preco_costela = 0;
  preco_linguica = 0;
  preco_frango = 0;

  consumo_adulto_picanha = 0;
  consumo_crianca_picanha = 0;
  consumo_adulto_costela = 0;
  consumo_crianca_costela = 0;
  consumo_adulto_linguica = 0;
  consumo_crianca_linguica = 0;
  consumo_adulto_frango = 0;
  consumo_crianca_frango = 0;

  preco_cerveja = 0;
  preco_refrigerante = 0;
  preco_agua = 0;
  preco_suco = 0;

  consumo_adulto_cerveja = 0;
  consumo_adulto_refrigerante = 0;
  consumo_crianca_refrigerante = 0;
  consumo_adulto_agua = 0;
  consumo_crianca_agua = 0;
  consumo_adulto_suco = 0;
  consumo_crianca_suco = 0;

  nome: string = '';

  constructor(
    private churrascometroService: ChurrascometroService,
    private formBuilder: FormBuilder
  ) {
    this.formPessoas = this.formBuilder.group({
      adultos: new FormControl(0)
    });
  }

  ngOnInit(): void {
    this.inicializarService();
    // this.churrascometroService.getPrecoPicanha()
    //   .subscribe(
    //     {
    //       next: (resultado) => {
    //         console.log(resultado);
    //         this.preco_kg_picanha = resultado;
    //       },

    //       error: (err) => {
    //         console.log(err);
    //       }
    //     }
    //   )

    // this.churrascometroService.getPrecoPicanha()
    //   .subscribe((resultado) => {
    //     console.log(resultado);
    //   })
  }

  inicializarService(): void {
    this.churrascometroService.getCarnes().pipe(
      map(carnes => {
        carnes.forEach(carne => {
          switch (carne.nome) {
            case 'picanha':
              this.preco_picanha = carne.preco_kg;
              this.consumo_adulto_picanha = carne.consumo_medio_adulto_g;
              this.consumo_crianca_picanha = carne.consumo_medio_crianca_g;
              break;
            case 'costela':
              this.preco_costela = carne.preco_kg;
              this.consumo_adulto_costela = carne.consumo_medio_adulto_g;
              this.consumo_crianca_costela = carne.consumo_medio_crianca_g;
              break;
            case 'linguiça':
              this.preco_linguica = carne.preco_kg;
              this.consumo_adulto_linguica = carne.consumo_medio_adulto_g;
              this.consumo_crianca_linguica = carne.consumo_medio_crianca_g;
              break;
            case 'frango':
              this.preco_frango = carne.preco_kg;
              this.consumo_adulto_frango = carne.consumo_medio_adulto_g;
              this.consumo_crianca_frango = carne.consumo_medio_crianca_g;
              break;
          }
        });
      })
    ).subscribe();

    this.churrascometroService.getBebidas().pipe(
      map(bebidas => {
        bebidas.forEach(bebida => {
          switch (bebida.nome) {
            case 'cerveja':
              this.preco_cerveja = bebida.preco_unidade;
              this.consumo_adulto_cerveja = bebida.consumo_medio_adulto_ml;
              break;
            case 'refrigerante':
              this.preco_refrigerante = bebida.preco_unidade;
              this.consumo_adulto_refrigerante = bebida.consumo_medio_adulto_ml;
              this.consumo_crianca_refrigerante = bebida.consumo_medio_crianca_ml;
              break;
            case 'água':
              this.preco_agua = bebida.preco_unidade;
              this.consumo_adulto_agua = bebida.consumo_medio_adulto_ml;
              this.consumo_crianca_agua = bebida.consumo_medio_crianca_ml;
              break;
            case 'suco':
              this.preco_suco = bebida.preco_unidade;
              this.consumo_adulto_suco = bebida.consumo_medio_adulto_ml;
              this.consumo_crianca_suco = bebida.consumo_medio_crianca_ml;
              break;
          }
        });
      })
    ).subscribe();
  }

  onSubmit(): void {
    const name = this.nome;
    console.log('Nome submetido: ' + name);
  }

}
