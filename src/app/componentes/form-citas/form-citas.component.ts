import { Component, OnInit } from '@angular/core';
import {IonList, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'comp-form-citas',
  templateUrl: './form-citas.component.html',
  styleUrls: ['./form-citas.component.scss'],
  standalone: true,
  imports: [FormsModule, IonButton, IonList, IonItem, IonInput, IonCardContent, IonCardSubtitle, IonCardTitle, IonCard, IonCardHeader ] 
})
export class FormCitasComponent  implements OnInit {

  citaStr: String = "";

  constructor() { }

  ngOnInit() {}


  crearCita() {
  }

}
