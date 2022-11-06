import { UsuarioService } from './../../../../services/usuario.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  encapsulation:ViewEncapsulation.None,
  templateUrl: './dialog-usuario.component.html',
  styleUrls: ['./dialog-usuario.component.scss']
})
export class DialogUsuarioComponent implements OnInit {
  Form!:FormGroup;
  Usuario:any[]=['Chofer','Pasajero'];
  constructor(private apiUsuario:UsuarioService,
    private formBuilder:FormBuilder,
    public DialogRef:MatDialogRef<DialogUsuarioComponent>,
    public snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.Form=this.formBuilder.group({
      nombre:['',Validators.required],
      email:[''],
      estado:[''],
      password:[''],
      tipoUsuario:['']
    })
  }
  close(){
    this.DialogRef.close();
  }
  addUsuario(){
    this.apiUsuario.add(this.Form.value).subscribe(response=>{
      if(response.exito==1){
        this.close();
        this.snackBar.open("Se inserto el grupo de forma","",{
          duration:2000
        })
      }
    })
  }
}
