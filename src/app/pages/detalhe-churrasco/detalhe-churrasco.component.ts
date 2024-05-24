import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-churrasco',
  standalone: true,
  imports: [],
  templateUrl: './detalhe-churrasco.component.html',
  styleUrl: './detalhe-churrasco.component.scss'
})
export class DetalheChurrascoComponent implements OnInit {

  @Input() set id(id: string) {
    this.churrascoId = id;
  };

  churrascoId!: string;

  constructor(private router: ActivatedRoute) {
  }

  public ngOnInit(): void {
    // console.log(this.router.snapshot.params['id']);
    // console.log(this.router.snapshot.paramMap.get('id'));
  }
}
