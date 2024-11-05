import { Component, OnInit } from '@angular/core';
import { IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonCardHeader } from "@ionic/angular/standalone";
import { Cita } from 'src/app/clases/cita';
import { CitasService } from 'src/app/servicios/citas.service';
import { CommonModule } from '@angular/common';
import * as _ from 'lodash';

@Component({
  selector: 'app-obtener-cita-aleatoria',
  templateUrl: './obtener-cita-aleatoria.component.html',
  styleUrls: ['./obtener-cita-aleatoria.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCardHeader, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard]
})

export class ObtenerCitaAleatoriaComponent  implements OnInit {
  citas:Cita[] = []
  citAle:String = ""
  citasAleatoria:any 

  constructor(
    // Aqui inyecto el servicio CitasService
    private citasService:CitasService
  ) {}


  ngOnInit() {   

    this.citasAleatoria = this.citasService.obtenerCitaRandom()
      console.log("this.obtcitas ",this.citasAleatoria ) 

    } 

  }

