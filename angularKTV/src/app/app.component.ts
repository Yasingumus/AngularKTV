import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mockjson = 'http://echo.jsontest.com/key/value/one/two';

  constructor(private http: HttpClient) {
    this.http.get(this.mockjson).toPromise().then(data => {
      console.log(data);
      })
  }
  title = "Kpi's";
}
