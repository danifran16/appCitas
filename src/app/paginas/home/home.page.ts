import { Component, OnInit } from '@angular/core';
import { IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon, IonCardTitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
import { ObtenerCitaAleatoriaComponent } from "../../componentes/obtener-cita-aleatoria/obtener-cita-aleatoria.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCardTitle, RouterModule, IonIcon, IonButtons, IonButton, IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, ObtenerCitaAleatoriaComponent],
})
export class HomePage implements OnInit {
  
  constructor(
  ) {
    addIcons({ heart });
  }

  ngOnInit(): void {
  }
}
