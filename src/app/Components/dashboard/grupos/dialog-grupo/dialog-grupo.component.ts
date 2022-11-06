import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GrupoService } from './../../../../services/grupo.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation:ViewEncapsulation.None,
  templateUrl: './dialog-grupo.component.html',
  styleUrls: ['./dialog-grupo.component.scss']
})
export class DialogGrupoComponent implements OnInit {
  Form!:FormGroup;
  Estado:any[]=['Activo','Inactivo'];
  constructor(private apiGrupo:GrupoService,
    private formBuilder:FormBuilder,
    public DialogRef:MatDialogRef<DialogGrupoComponent>,
    public snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.Form=this.formBuilder.group({
      nombreGrupo:['',Validators.required],
      descripcion:[''],
      estado:[''],
    })
  }
  close(){
    this.DialogRef.close();
  }
  addGrupo(){
    this.apiGrupo.add(this.Form.value).subscribe(response=>{
      if(response.exito==1){
        this.close();
        this.snackBar.open("Se inserto el grupo de forma","",{
          duration:2000
        })
      }
    })
  }
}
