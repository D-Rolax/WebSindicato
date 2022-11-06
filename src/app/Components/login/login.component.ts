import { Response } from './../../models/response';
import { ApiauthService } from './../../services/apiauth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading=false;
  response!:Response;
  public loginForm=this.formBuilder.group({
    email:['',Validators.required],
    password:['',Validators.required]
  });
  constructor(public apiauthService:ApiauthService, private fb:FormBuilder,private _snackBar: MatSnackBar, 
    private router: Router,private formBuilder:FormBuilder) {

    if (this.apiauthService.usuarioData) {
      this.loading=true;
      setTimeout(()=>{
     
        this.router.navigate(['dashboard']);
      },1500);
    }
   }

  ngOnInit(): void {

  }

  login(){
    this.apiauthService.login(this.loginForm.value).subscribe(res=>{
      this.ingresoPrincipal();
      },error =>{
        this.MensajeError();
      }
    );
  }
  ingresoPrincipal(){
    this.loading=true;
    setTimeout(()=>{
      this.router.navigate(['dashboard']);
    },1500);
    this.loginForm.reset;
  }
  MensajeError(){
    this._snackBar.open("Usuario o contraseña incorrecta",'',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom',
      panelClass : ['red-snackbar']
    });
  }
}
