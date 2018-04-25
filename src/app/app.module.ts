import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CatalogoPage } from '../pages/catalogo/catalogo';
import { PublicacionesPage } from '../pages/publicaciones/publicaciones';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegistroPage } from '../pages/registro/registro';
import { InicioPage } from '../pages/inicio/inicio';
import { FiltrosPage } from '../pages/filtros/filtros';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CatalogoPage,
    RegistroPage,
    InicioPage,
    FiltrosPage
    PublicacionesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CatalogoPage,
    RegistroPage,
    InicioPage,
    FiltrosPage
    PublicacionesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
