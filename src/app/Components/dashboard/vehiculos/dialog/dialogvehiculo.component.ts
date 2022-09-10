import { Vehiculo } from './../../../../models/Vehiculos';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApivehiculoService } from 'src/app/services/apivehiculo.service';
import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    templateUrl: 'dialogvehiculo.component.html'
})
export class DialogVehiculoComponent{
    public placa!:string;
    public modelo!:string;
    public tipo!:string;
    public marca!:string;
    public color!:string;
    public estado!:string;
    Estado: any[] = ['Activo','Inactivo']

    constructor(public Dialogref:MatDialogRef<DialogVehiculoComponent>,
        public apiVehiculo: ApivehiculoService,
        public snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public vehiculo:Vehiculo,
        ){
            if(this.vehiculo !== null)
            {
                this.placa=vehiculo.placa;
                this.modelo=vehiculo.modelo;
                this.tipo=vehiculo.tipo;
                this.marca=vehiculo.marca;
                this.color=vehiculo.color;
                this.estado=vehiculo.estado;
            }
        }
    Ocultar(){

    }
    close(){
        this.Dialogref.close();
    }
    editVehiculo(){
        const vehiculo:Vehiculo={id:this.vehiculo.id,placa:this.placa, modelo:this.modelo,tipo:this.tipo,
            marca:this.marca,color:this.color,estado:this.estado};
        this.apiVehiculo.edit(vehiculo).subscribe(response=>{
            if(response.exito==1){
                this.Dialogref.close(); 
                this.snackBar.open('Vehiculo editado con exito','',{
                    duration:2000
                });
            }
        })
    }
    addVehiculo(){
        const vehiculo:Vehiculo={id:0,placa:this.placa, modelo:this.modelo,tipo:this.tipo,
            marca:this.marca,color:this.color,estado:this.estado};
        this.apiVehiculo.add(vehiculo).subscribe(response=>{
            if(response.exito==1){
                this.Dialogref.close(); 
                this.snackBar.open('Vehiculo insertado con exito','',{
                    duration:2000
                });
            }
        })
    }
}