import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficaComponent } from './grafica/grafica.component';
import { HomeComponent } from './home.component';
import { InicioComponent } from './inicio/inicio.component';
import { TablaComponent } from './tabla/tabla.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    {path: '', redirectTo:'inicio', pathMatch:'full'},
    {path: 'inicio', component: InicioComponent},
    {path: 'tabla', component: TablaComponent},
    {path: 'grafica', component: GraficaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
