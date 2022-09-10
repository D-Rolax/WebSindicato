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

    constructor(public Dialogref:MatDialogRef<DialogVehiculoComponent>,
        public apiCliente: ApivehiculoService,
        public snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public vehiculo:Vehiculo,
        ){
            if(this.vehiculo !== null)
            {
                this.placa=vehiculo.Placa;
                this.modelo=vehiculo.Modelo;
                this.tipo=vehiculo.Tipo;
                this.marca=vehiculo.Marca;
                this.color=vehiculo.Color;
            }
        }
    close(){
        this.Dialogref.close();
    }
    addCliente(){
        const vehiculo:Vehiculo={Id:0,Placa:this.placa, Modelo:this.modelo,Tipo:this.tipo,
            Marca:this.marca,Color:this.color};
        this.apiCliente.add(vehiculo).subscribe(response=>{
            if(response.exito==1){
                this.Dialogref.close(); 
                this.snackBar.open('Vehiculo insertado con exito','',{
                    duration:2000
                });
            }
        })
    }
}