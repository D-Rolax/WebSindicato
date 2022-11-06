import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReportesComponent } from './reportes/reportes.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { GruposComponent } from './grupos/grupos.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { DialogComunidadComponent } from './comunidad/dialog-comunidad/dialog-comunidad.component';
import { DialogGrupoComponent } from './grupos/dialog-grupo/dialog-grupo.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DialogUsuarioComponent } from './usuarios/dialog-usuario/dialog-usuario.component';
import { HorariosComponent } from './horarios/horarios.component';
import { DialogHorarioComponent } from './Horarios/dialog-horario/dialog-horario.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    ReportesComponent,
    VehiculosComponent,
    GruposComponent,
    ComunidadComponent,
    DialogComunidadComponent,
    DialogGrupoComponent,
    UsuariosComponent,
    DialogUsuarioComponent,
    HorariosComponent,
    DialogHorarioComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
