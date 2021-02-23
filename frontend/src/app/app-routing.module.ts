import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './paginainicial/paginainicial.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {path: 'paginainicial', component: PaginaInicialComponent},
  {path: '', component: ProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
