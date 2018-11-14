import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioPageModule } from './inicio/inicio.module';
import { NovidadesPageModule } from './novidades/novidades.module';
import { EncomendasPageModule } from './encomendas/encomendas.module';
import { LoginPageModule } from './login/login.module';
import { CarrinhoPageModule } from './carrinho/carrinho.module';
import { CardapioPageModule } from './cardapio/cardapio.module';
import { PedidosPageModule } from './pedidos/pedidos.module';
import { SobrePageModule } from './sobre/sobre.module';
import { ContatosPageModule } from './contatos/contatos.module';
import { CompartilhePageModule } from './compartilhe/compartilhe.module';
import { MenuPageModule } from './menu/menu.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
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
    MenuPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
