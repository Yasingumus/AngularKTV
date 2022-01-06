import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emission-difference',
  templateUrl: './emission-difference.component.html',
  styleUrls: ['./emission-difference.component.css']
})
export class EmissionDifferenceComponent implements OnInit {

  @Input() difference = '';
  constructor() { }

  ngOnInit(): void {
  }

}
