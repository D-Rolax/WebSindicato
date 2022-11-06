//import { DialogHorarioComponent } from './dialog-horario/dialog-horario.component';
import { Horario } from './../../../models/horario';
import { HorarioService } from './../../../services/horario.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent implements OnInit {
  displayedColumns: string[] = ['horarioSalida', 'horarioLlegada', 'estado', 'fecha','acciones'];
  dataSource = new MatTableDataSource<Horario>([]);
  constructor(private apiHorario:HorarioService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getHorario()
  }
  getHorario(){
    this.apiHorario.get().subscribe(response=>{
      if(response.exito==1)
      {
        this.dataSource=response.data;
      }
    })
  };
  // openAdd(){
  //   const dialogRef=this.dialog.open(DialogHorarioComponent,{
  //     width:'300px'
  //   })
  //   dialogRef.afterClosed().subscribe(result=>{
  //     this.getGrupo();
  //   })
  // };
}
