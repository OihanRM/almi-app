import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnadoService } from '../servicios/alumnado.service';
import { Alumno } from '../models/alumno';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  alumnos:Alumno[] | undefined;
  //private activatedRoute = inject(ActivatedRoute);
  constructor(private activatedRoute:ActivatedRoute, private alumnadoService:AlumnadoService, private loadingController:LoadingController) {
    this.alumnos = [];
  }

  ngOnInit() {
    //this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getAlumnosHome();
  }
  async getAlumnosHome(){
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
}
