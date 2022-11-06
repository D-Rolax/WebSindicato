import { DialogComunidadComponent } from './dialog-comunidad/dialog-comunidad.component';
import { MatDialog } from '@angular/material/dialog';
import { Comunidad } from './../../../models/comunidad';
import { MatTableDataSource } from '@angular/material/table';
import { ComunidadService } from './../../../services/comunidad.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.scss']
})
export class ComunidadComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'descripcion', 'estado', 'fecha','acciones'];
  dataSource = new MatTableDataSource<Comunidad>([]);

  constructor(private apiComunidad:ComunidadService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getComunidad();
  }
  getComunidad(){
    this.apiComunidad.get().subscribe(response=>{
      if(response.exito=1){
        this.dataSource.data=response.data;
      }
    });
    console.log(this.dataSource);
  }
  openAdd(){
    const dialigRef=this.dialog.open(DialogComunidadComponent,{
      width:'300px',
    });
    dialigRef.afterClosed().subscribe(result=>{
      this.getComunidad();
    });
  }
  openEdit(comunidad:Comunidad){
    const dialigRef=this.dialog.open(DialogComunidadComponent,{
      width:'300px',
      data:comunidad
    });
    dialigRef.afterClosed().subscribe(result=>{
      this.getComunidad();
    });
  }
}
