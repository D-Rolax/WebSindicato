import { ApiafiliadoService } from './../../../../services/apiafiliado.service';
import { DialogDeleteComponent } from './../../../../common/delete/dialogdelete.component';
import { Afiliado } from './../../../../models/afiliado';
import { FormBuilder, Validators } from '@angular/forms';
import { Vehiculo } from './../../../../models/Vehiculos';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApivehiculoService } from 'src/app/services/apivehiculo.service';
import { Component, Inject,ViewEncapsulation } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    templateUrl: 'dialogvehiculo.component.html',
    styleUrls: ['./dialogvehiculo.component.scss'],
    encapsulation:ViewEncapsulation.None
})
export class DialogVehiculoComponent{

    formulario!:Boolean;
    public vehiculos!:Vehiculo;
    public afiliados!:Afiliado[];

    public afiliadosForm=this.formBuilder.group({
        nombres:[''],
        apellidos:[''],
        ci:[''],
        direccion:[''],
        fechaNacimiento:['']
    })

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
        private formBuilder:FormBuilder,
        public dialog:MatDialog,
        public apiAfiliado:ApiafiliadoService,
        @Inject(MAT_DIALOG_DATA) public vehiculo:Vehiculo,
        ){
            this.afiliados=[];
            if(this.vehiculo !== null)
            {
                this.placa=vehiculo.placa;
                this.modelo=vehiculo.modelo;
                this.tipo=vehiculo.tipo;
                this.marca=vehiculo.marca;
                this.color=vehiculo.color;
                this.estado=vehiculo.estado;
                this.afiliados=vehiculo.afiliados;
            }
        }
    close(){
        this.Dialogref.close();
    }
    ngOnInit(): void {
        
    }
    editVehiculo(){
        const vehiculo:Vehiculo={id:this.vehiculo.id,placa:this.placa, modelo:this.modelo,tipo:this.tipo,
            marca:this.marca,color:this.color,estado:this.estado,afiliados:this.afiliados};
        this.apiVehiculo.edit(vehiculo).subscribe(response=>{
            if(response.exito==1){
                this.Dialogref.close(); 
                this.snackBar.open('Vehiculo editado con exito','',{
                    duration:2000
                });
            }
        })
    }
    addAfiliados(){  
        this.afiliados.push(this.afiliadosForm.value);
        this.afiliadosForm.reset();
    }
    addVehiculo(){
        this.vehiculo={id:0,placa:this.placa, modelo:this.modelo,tipo:this.tipo,
                 marca:this.marca,color:this.color,estado:this.estado,afiliados:this.afiliados};
        this.apiVehiculo.add(this.vehiculo).subscribe(response=>{
            if (response.exito===1) {
                this.Dialogref.close();
                this.snackBar.open('Vehiculo insertado con exito','',{
                    duration:2000
                });
            }
        })
    }
    mostrarForm():void{
        this.formulario=true;
    }
    quitarAfiliado(i:number){
        this.afiliados.splice(i,1 );    
    }
    delete(afiliados:Afiliado,index:number){
        const dialogRef=this.dialog.open(DialogDeleteComponent,{
            width:'250px'
        });
        dialogRef.afterClosed().subscribe(result => {
            if(result){
                if(afiliados.id){
                    this.apiAfiliado.delete(afiliados.id).subscribe(response=>{
                        if(response.exito==1){
                          this.snackBar.open('Afiliado eliminado con exito','',{
                            duration:2000
                          });
                          this.quitarAfiliado(index);
                        }
                      });
                }
                else{
                    this.quitarAfiliado(index);
                }
            }
          });
    }
}