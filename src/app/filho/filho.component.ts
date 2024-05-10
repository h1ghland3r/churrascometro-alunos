import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-filho',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.scss'
})
export class FilhoComponent {
  @Input() dados!: string;
  @Output() valor = new EventEmitter<number>();


  emitirValorParaPai(): void {
    this.valor.emit(1);
  }
}
