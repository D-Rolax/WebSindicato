import { AuthGuard } from './Security/auth.guard';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { flush } from '@angular/core/testing';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', loadChildren: () => import('./Components/dashboard/dashboard.module').then(x=>x.DashboardModule)}
  // {path:'',redirectTo: '/home', pathMatch:'full'},
  // {path:'home',component: HomeComponent},
  // {path:'vehiculo',component: VehiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
