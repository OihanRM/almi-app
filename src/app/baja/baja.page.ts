import { Component, OnInit } from '@angular/core';
import { AlumnadoService } from '../servicios/alumnado.service';
import { Alumno } from '../models/alumno';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-baja',
  templateUrl: './baja.page.html',
  styleUrls: ['./baja.page.scss'],
})
export class BajaPage implements OnInit {

  alumnos: Alumno[] = [];
  constructor(private alumnadoService:AlumnadoService, public loadingController:LoadingController) { }

  ngOnInit() {
    this.getAlumnosBaja();
  }

  async getAlumnosBaja(){
    const loading = await this.loadingController.create({message:'Cargando datos'});
    await loading.present();

    await this.alumnadoService.getAlumnado().subscribe(
      res => {
        this.alumnos = res;
        loading.dismiss();
        console.log(this.alumnos);
    
      },
      err=>{
        console.log(err);
        loading.dismiss();
      }
    )
  }
  
  borrarAlumno(id:number){
    this.alumnadoService.borrarAlumno(id).subscribe(
      res=>{
        console.log(res);
        this.getAlumnosBaja();
      },
      err=>{
        console.log(err);
      }
    );
  }

}
