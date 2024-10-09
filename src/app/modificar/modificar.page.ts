import { Component, OnInit } from '@angular/core';
import { AlumnadoService } from '../servicios/alumnado.service';
import { AppRoutingModule } from '../app-routing.module';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {
  alumno = {'id':-1, 'dni': '', 'nombre':'','apellido1':'','apellido2':'','fecha':new Date(),'provincia':''};

  constructor(public loadingController:LoadingController, private alumnadoService:AlumnadoService, private routerData:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.routerData.params.subscribe(params => {
      const alumnoStr = params['alumno'];
      this.alumno = JSON.parse(alumnoStr);
      console.log(this.alumno);
    });
  }

  async enviarFormulario(){
    console.log(this.alumno);
    this.modificarAlumno(this.alumno.id);
  }

  async modificarAlumno(id:number){
    const loading = await this.loadingController.create({message:'Cargando datos'});
    await loading.present();

    await this.alumnadoService.modificarAlumno(this.alumno.id, this.alumno).subscribe(
      res => {
        console.log(res);
        loading.dismiss();
        this.router.navigate(['/mod']);
      },
      err=>{
        loading.dismiss();
        console.log(err);
      }
    )
  }

}
