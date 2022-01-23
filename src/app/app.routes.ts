import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { InvestigacionComponent } from "./components/investigacion/investigacion.component";

const APP_ROUTES:Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'galeria', component: GaleriaComponent},
    {path: 'investigacion', component: InvestigacionComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);