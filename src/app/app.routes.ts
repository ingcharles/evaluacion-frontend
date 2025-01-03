import { Routes } from '@angular/router';
import { LocalizacionComponent } from '../presentation/localizacion/localizacion.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'home', component: LocalizacionComponent
},];
