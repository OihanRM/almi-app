import { Component, OnInit } from '@angular/core';
import { AlumnadoService } from '../servicios/alumnado.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Alumno } from '../models/alumno';

@Component({
  selector: 'app-mod',
  templateUrl: './mod.page.html',
  styleUrls: ['./mod.page.scss'],
})
export class ModPage implements OnInit {
  alumnos: Alumno[] = [];

  constructor(private alumnadoService:AlumnadoService, private router:Router, public loadingController:LoadingController) { }

  ngOnInit() {
    this.getAlumnosMod();
  }

  async getAlumnosMod(){
    const loading = await this.loadingController.create({message:'Cargando datos'});
    await loading.present();

    await this.alumnadoService.getAlumnado().subscribe(
      res => {
        this.alumnos = res;
        loading.dismiss();
    
      },
      err=>{
        console.log(err);
        loading.dismiss();
      }
    )
  }

  modificarAlumno(alumno:Alumno){
    const alumnoStr = JSON.stringify(alumno);
    this.router.navigate(['/modificar', {alumno:alumnoStr}]);
  }

}
