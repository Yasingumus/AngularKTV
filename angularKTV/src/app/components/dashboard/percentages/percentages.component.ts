import { Component, Input, OnInit } from '@angular/core';
import { PercentagesData } from './percentages-json';
// Importeer Component input en onInit uit angular core
//Importeer PercentagesData de Json van ons uit het .ts bestand

// Component bestaat uit deze paths// 
@Component({
  selector: 'app-percentages',
  templateUrl: './percentages.component.html',
  styleUrls: ['./percentages.component.css']
})

export class PercentagesComponent {

  @Input() name = '';
  @Input() data: any = [];

  

  constructor() { }
}
