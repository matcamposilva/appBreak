import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';


import { InicioPage } from '../inicio/inicio.page';
import { NovidadesPage } from '../novidades/novidades.page';
import { CardapioPage } from '../cardapio/cardapio.page';
import { MenuPage } from '../menu/menu.page';
import { CarrinhoPage } from '../carrinho/carrinho.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(inicio:inicio)',
        pathMatch: 'full',
      },
      {
        path: 'inicio',
        outlet: 'inicio',
        component: InicioPage
      },
      {
        path: 'novidades',
        outlet: 'novidades',
        component: NovidadesPage
      },
      {
        path: 'cardapio',
        outlet: 'cardapio',
        component: CardapioPage
      },
      {
        path: 'carrinho',
        outlet: 'carrinho',
        component: CarrinhoPage
      },
      {
        path: 'menu',
        outlet: 'menu',
        component: MenuPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(inicio:inicio)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
