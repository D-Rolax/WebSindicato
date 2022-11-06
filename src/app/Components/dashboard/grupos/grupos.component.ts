import { DialogGrupoComponent } from './dialog-grupo/dialog-grupo.component';
import { MatDialog } from '@angular/material/dialog';
import { Grupos } from './../../../models/grupos';
import { GrupoService } from './../../../services/grupo.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'descripcion', 'estado', 'fecha','acciones'];
  dataSource = new MatTableDataSource<Grupos>([]);
  constructor(private apiService:GrupoService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getGrupo();
  }
  getGrupo(){
    this.apiService.get().subscribe(response=>{
      if(response.exito==1)
      {
        this.dataSource=response.data;
      }
    })
  }
  openAdd(){
    const dialogRef=this.dialog.open(DialogGrupoComponent,{
      width:'300px'
    })
    dialogRef.afterClosed().subscribe(result=>{
      this.getGrupo();
    })
  };
}
