import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { FormCitasComponent } from "../../componentes/form-citas/form-citas.component";
import { ListaCitasComponent } from 'src/app/componentes/lista-citas/lista-citas.component';


@Component({
  selector: 'page-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
  standalone: true,
  imports: [FormCitasComponent, ListaCitasComponent, IonButtons, IonBackButton, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GestionCitasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
