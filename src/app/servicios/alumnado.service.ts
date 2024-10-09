import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnadoService {
  public url:string = 'http://54.235.130.124:8000/ws/alumnado/';

  constructor(private httpClient:HttpClient) { }

  getAlumnado():Observable<Alumno[]>{
    return this.httpClient.get<Alumno[]>(this.url);

  }

  crearAlumno(alumno:Alumno):Observable<any>{
    if(alumno.fecha){
      alumno.fecha = new Date(alumno.fecha);
    }
    return this.httpClient.post<Alumno>(this.url +"add", alumno);
  }

  borrarAlumno(id:number):Observable<any>{
    return this.httpClient.delete(this.url + "delete/" + id);
  }
}
