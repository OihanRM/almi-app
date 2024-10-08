import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Almi', url: '/folder', icon: 'home' },
  ];
  constructor(private platform:Platform ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
    });
  }

  ngOnInit() {
    console.log('App Component');
  }
}
