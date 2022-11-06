import { DialogUsuarioComponent } from './dialog-usuario/dialog-usuario.component';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioService } from './../../../services/usuario.service';
import { Usuarios } from './../../../models/Usuarios';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['nombre','email', 'estado', 'fecha','tipousuario','acciones'];
  dataSource = new MatTableDataSource<Usuarios>([]);
  constructor(private apiService:UsuarioService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getUsuario()
  }
  getUsuario(){
    this.apiService.get().subscribe(response=>{
      if(response.exito==1){
        this.dataSource=response.data
      }
    })
  };
  openAdd(){
    const dialogRef=this.dialog.open(DialogUsuarioComponent,{
      width:'300px'
    })
    dialogRef.afterClosed().subscribe(result=>{
      this.getUsuario();
    })
  };
}
