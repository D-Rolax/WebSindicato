import { SharedModule } from './Components/shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DialogVehiculoComponent } from './Components/dashboard/vehiculos/dialog/dialogvehiculo.component';

// Componentes 
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DialogDeleteComponent } from './common/delete/dialogdelete.component';
import{JwtInterceptor} from './Security/jwt.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DialogVehiculoComponent,
    DialogDeleteComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
