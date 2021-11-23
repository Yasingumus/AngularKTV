import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-kpi',
  templateUrl: './single-kpi.component.html',
  styleUrls: ['./single-kpi.component.css']
})
export class SingleKpiComponent implements OnInit {
  @Input() name='';
  constructor() { }

  ngOnInit(): void {
  }

}
