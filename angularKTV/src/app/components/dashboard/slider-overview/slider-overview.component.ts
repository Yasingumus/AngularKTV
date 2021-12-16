import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-slider-overview',
  templateUrl: './slider-overview.component.html',
  styleUrls: ['./slider-overview.component.css']
})

export class SliderOverviewComponent {

  @Output() sliderChangeEvent = new EventEmitter<number>();

  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 7 },
      { value: 8 },
      { value: 9 },
      { value: 10 }]
  }

  onSlideChange(time: number): void {
    this.sliderChangeEvent.emit(time);
  }

}
