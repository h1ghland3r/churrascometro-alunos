import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaChurrascoComponent } from './pages/lista-churrasco/lista-churrasco.component';
import { CriacaoChurrascoComponent } from './pages/criacao-churrasco/criacao-churrasco.component';
import { DetalheChurrascoComponent } from './pages/detalhe-churrasco/detalhe-churrasco.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Churrascômetro' },
  {
    path: 'churrascos',
    children: [
      {
        path: '',
        component: ListaChurrascoComponent,
        title: 'Lista de Churrascos'
      },
      {
        path: 'novo',
        component: CriacaoChurrascoComponent,
        title: 'Novo Churrasco'
      },
      {
        path: ':id',
        component: DetalheChurrascoComponent,
        title: 'Detalhes do Churrasco'
      },
    ]
  },
  { path: '**', component: NotFoundComponent, title: 'Página Não Encontrada' },
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];
