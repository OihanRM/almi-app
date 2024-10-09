import { Component, OnInit } from '@angular/core';
import { AlumnadoService } from '../servicios/alumnado.service';
import { Alumno } from '../models/alumno';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baja',
  templateUrl: './baja.page.html',
  styleUrls: ['./baja.page.scss'],
})
export class BajaPage implements OnInit {

  alumnos: Alumno[] = [];
  constructor(private alumnadoService:AlumnadoService, public loadingController:LoadingController, public alertController:AlertController, private router:Router) { }

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
  
  async borrarAlumno(id:number){
    const loading = await this.loadingController.create({message:'Borrando datos'});
    await loading.present();

    await this.alumnadoService.borrarAlumno(id).subscribe(
      res=>{
        console.log(res);
        loading.dismiss();
        this.getAlumnosBaja();
      },
      err=>{
        console.log(err);
        loading.dismiss();
      }
    );
  }

  async presentAlertConfirm(id:number) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que quieres borrar este alumno?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Cancelar');
          },
        }, {
          text: 'Borrar',
          handler: () => {
            this.borrarAlumno(id);
            this.router.navigateByUrl('');
          },
        },
      ],
    });
    await alert.present();
  }

}
