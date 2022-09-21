import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TablaComponent } from './tabla/tabla.component';
import { GraficaComponent } from './grafica/grafica.component';
import { MaterialModule } from 'src/app/material.module';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    HomeComponent,
    TablaComponent,
    GraficaComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class HomeModule { }
