import { Afiliado } from './afiliado';


export interface Vehiculo{
    id: number;
    placa: string;
    modelo: string;
    tipo:string;
    marca:string;
    color:string;
    estado:string;
    afiliados:Afiliado[];
}