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
}
