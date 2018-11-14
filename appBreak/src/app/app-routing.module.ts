import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'novidades', loadChildren: './novidades/novidades.module#NovidadesPageModule' },
  { path: 'encomendas', loadChildren: './encomendas/encomendas.module#EncomendasPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'carrinho', loadChildren: './carrinho/carrinho.module#CarrinhoPageModule' },
  { path: 'cardapio', loadChildren: './cardapio/cardapio.module#CardapioPageModule' },
  { path: 'pedidos', loadChildren: './pedidos/pedidos.module#PedidosPageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'contatos', loadChildren: './contatos/contatos.module#ContatosPageModule' },
  { path: 'compartilhe', loadChildren: './compartilhe/compartilhe.module#CompartilhePageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
