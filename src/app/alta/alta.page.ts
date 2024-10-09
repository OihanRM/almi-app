import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno';
import { LoadingController } from '@ionic/angular';
import { AlumnadoService } from '../servicios/alumnado.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.page.html',
  styleUrls: ['./alta.page.scss'],
})
export class AltaPage implements OnInit {
  public alumno = {'id':-1, 'dni': '', 'nombre':'','apellido1':'','apellido2':'','fecha':new Date(),'provincia':''};


  constructor(private loadingController:LoadingController, private alumnadoService:AlumnadoService) { }

  ngOnInit() {

  }
  enviarFormulario(){
    console.log(this.alumno);
    this.altaAlumno();

  }

  async altaAlumno(){
    const loading = await this.loadingController.create({message:'Cargando datos'});
    await loading.present();

    await this.alumnadoService.crearAlumno(this.alumno).subscribe(
      res => {
        console.log(res);
        loading.dismiss();
        this.alumno = {'id':-1, 'dni': '', 'nombre':'','apellido1':'','apellido2':'','fecha':new Date(),'provincia':''};
      },
      err=>{
        console.log(err);
        loading.dismiss();
      }
    )
  }
}
