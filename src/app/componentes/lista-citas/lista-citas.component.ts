import { Component, OnInit } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'comp-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.scss'],
  standalone: true,
  imports: [ IonContent ] 

})
export class ListaCitasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
