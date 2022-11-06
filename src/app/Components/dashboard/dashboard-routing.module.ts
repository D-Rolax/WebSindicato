import { HorariosComponent } from './horarios/horarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { GruposComponent } from './grupos/grupos.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Security/auth.guard';

const routes: Routes = [
  {path:'',component:DashboardComponent, children:[
    { path: '',component: InicioComponent },
    { path: 'vehiculos',component:  VehiculosComponent, canActivate:[AuthGuard] },
    { path: 'reportes',component: ReportesComponent },
    {path:'comunidad',component:ComunidadComponent},
    {path:'grupos',component:GruposComponent},
    {path:'usuarios',component:UsuariosComponent},
    {path:'horarios',component:HorariosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
