import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  loading=false;
  constructor(private fb:FormBuilder,private _snackBar: MatSnackBar, private router: Router) {
    this.form=this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  ingresar(){
    console.log(this.form)
    const usuario=this.form.value.usuario;
    const paswword=this.form.value.password;
    if(usuario=='David' && paswword=='123')
    {
      //redireccionamos al dasboard
      this.fakLoading(); 
      this.form.reset();
    }else
    {
      //mostramos un mensaje de error
      this.error(); 
    }
  }
  error()
  {
      this._snackBar.open('Usuario o contraseña ingresado son invalidos','',{
        duration:5000,
        horizontalPosition:'center',
        verticalPosition:'bottom'
      })
  }
  fakLoading(){
    this.loading=true;
    setTimeout(()=>{
   
      this.router.navigate(['dashboard']);
    },1500);
  }
}
