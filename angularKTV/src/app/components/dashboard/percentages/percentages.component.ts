import { Component, Input, OnInit } from '@angular/core';
import { PercentagesData } from './percentages-json';

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
