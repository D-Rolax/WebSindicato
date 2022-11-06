import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogDeleteComponent } from './../../../common/delete/dialogdelete.component';
import { Component, OnInit, ViewChild} from '@angular/core';
import { ApivehiculoService } from 'src/app/services/apivehiculo.service';
import { Response } from 'src/app/models/response';
import { MatTableDataSource } from '@angular/material/table';
import { DialogVehiculoComponent } from './dialog/dialogvehiculo.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Vehiculo } from 'src/app/models/Vehiculos';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent implements OnInit{

  readonly width: string='800px';
  public columnas: string[]=['Placa','Modelo','Tipo','Marca','Color','Estado','Fecha','acciones'];
  dataSource= new MatTableDataSource<Vehiculo>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private apiVehiculo: ApivehiculoService,
    public dialog:MatDialog,
    public snackBar:MatSnackBar) { 
  }

  ngOnInit(): void {
    this.getVehiculos();
  }
  ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
   }
  getVehiculos(){
    this.apiVehiculo.getVehiculo().subscribe(response=>{
      if(response.exito==1)
      {
        this.dataSource.data=response.data;
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openAdd(){
    const dialogRef = this.dialog.open(DialogVehiculoComponent,{
      width: this.width,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getVehiculos();
    });
  }
  openEdit(vehiculo:Vehiculo){
    const dialogRef = this.dialog.open(DialogVehiculoComponent,{
      width: this.width,
      data: vehiculo
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getVehiculos();
    });
  }
  delete(vehiculo:Vehiculo){
    const dialogRef = this.dialog.open(DialogDeleteComponent,{
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.apiVehiculo.delete(vehiculo.id).subscribe(response=>{
          if(response.exito==1){
            this.snackBar.open('Vehiculo eliminado con exito','',{
              duration:2000
            });
            this.getVehiculos();
          }
          else{
            this.MensajeError();
          }
        })
      }
    });
    ;
  }
  MensajeError(){
    this.snackBar.open("Primero debe eliminar a sus Afiliados en la opcion editar",'',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    });
  }
}

