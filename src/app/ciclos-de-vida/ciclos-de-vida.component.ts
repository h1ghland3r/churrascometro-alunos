import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclos-de-vida',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ciclos-de-vida.component.html',
  styleUrl: './ciclos-de-vida.component.scss'
})
export class CiclosDeVidaComponent implements OnInit, OnChanges, OnDestroy {

  @Input() mensagem!: boolean;

  constructor() {
    console.log('Ciclo de vida chamou constructor');
  }

  ngOnInit() {
    console.log('Ciclo de vida chamou OnInit');
  }

  ngOnChanges() {
    console.log('Ciclo de vida chamou OnChanges');
  }

  ngOnDestroy() {
    console.log('Ciclo de vida chamou OnDestroy');
  }
}
