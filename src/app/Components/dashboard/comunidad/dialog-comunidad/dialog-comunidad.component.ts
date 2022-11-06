import { ViewEncapsulation } from '@angular/core';
import { Comunidad } from './../../../../models/comunidad';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { ComunidadService } from './../../../../services/comunidad.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-comunidad',
  templateUrl: './dialog-comunidad.component.html',
  styleUrls: ['./dialog-comunidad.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class DialogComunidadComponent implements OnInit {

  public Form!:FormGroup;
  Estado:any[]=['Activo','Inactivo'];

  constructor(private apiComunidad: ComunidadService,
    private formBuilder:FormBuilder,
    public DialogRef:MatDialogRef<DialogComunidadComponent>,
    public snackBar:MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public comunidad:Comunidad)
     { }

  ngOnInit(): void {
    this.Form=this.formBuilder.group({
      nombre:['',Validators.required],
      descripcion:[''],
      estado:[''],
    });
    this.loadApi();
  }
  close(){
    this.DialogRef.close();
  }
  loadApi():any{
    const response={
      nombre:this.comunidad.nombre,
      descripcion:this.comunidad.descripcion,
      estado:this.comunidad.estado
    }
    console.log(response);
    
  }
  addComunidad(){

    this.apiComunidad.add(this.Form.value).subscribe(response=>{
      if(response.exito===1){
        this.DialogRef.close();
        this.snackBar.open('Comunidad insertado con exito','',{
          duration:2000
      });
      }
    })
  }
}
