import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { InvestigacionComponent } from './components/investigacion/investigacion.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { APP_ROUTING } from './app.routes';

import {InvestigacionService} from './services/investigacion.service'
import { GaleriaConsumoService } from './services/galeriaConsumo.service';
import { GaleriaBrujulaService } from './services/galeriaBrujula.service';
import { GaleriaConversatorioService } from './services/galeriaConversatori.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GaleriaComponent,
    InvestigacionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    InvestigacionService,
    GaleriaConsumoService,
    GaleriaBrujulaService,
    GaleriaConversatorioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
