import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { InicioPageModule } from '../inicio/inicio.module';
import { NovidadesPageModule } from '../novidades/novidades.module';
import { EncomendasPageModule } from '../encomendas/encomendas.module';
import { LoginPageModule } from '../login/login.module';
import { CarrinhoPageModule } from '../carrinho/carrinho.module';
import { CardapioPageModule } from '../cardapio/cardapio.module';
import { PedidosPageModule } from '../pedidos/pedidos.module';
import { SobrePageModule } from '../sobre/sobre.module';
import { ContatosPageModule } from '../contatos/contatos.module';
import { CompartilhePageModule } from '../compartilhe/compartilhe.module';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    InicioPageModule,
    NovidadesPageModule,
    EncomendasPageModule,
    LoginPageModule,
    CarrinhoPageModule,
    CardapioPageModule,
    PedidosPageModule,
    SobrePageModule,
    ContatosPageModule,
    CompartilhePageModule,
    MenuPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
