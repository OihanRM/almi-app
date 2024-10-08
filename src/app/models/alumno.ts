export class Alumno{
    id: number;
    nombre: string;
    apellido1: string;
    apellido2: string;
    fecha: Date;
    provincia: string;
    constructor(id: number, nombre: string, apellido1: string, apellido2: string, fecha: Date, provincia: string){
        this.id = id;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.fecha = fecha;
        this.provincia = provincia;
    }
}