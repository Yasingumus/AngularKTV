import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-slider-overview',
  templateUrl: './slider-overview.component.html',
  styleUrls: ['./slider-overview.component.css']
})

export class SliderOverviewComponent implements OnInit {
  value: number = 123;

  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 7 },
      { value: 8 },
      { value: 9 },
      { value: 10 }]
  }

  constructor() { }

  ngOnInit(): void {
  }
  onInputChange(event: any): void {
    console.log("This is emitted as the thumb slides");
    console.log(event.value);
  }

}
