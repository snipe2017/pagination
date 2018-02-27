import { Component, OnInit} from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PageService } from './page.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: Http, private pageservice: PageService) {
    for (let i = 1; i <= 100; i++) {
      this.employees.push(`item ${i}`);
    }
  }

employees = [];


  ngOnInit() {
    this.http.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
  .map((response: Response) => response.json())
  .subscribe(data => {
    this.employees = data;
  });
}

printme(lang) {
  const languages: any[] = [];
  for  (const propName in lang) {
    if (lang.hasOwnProperty(propName)) {
        const propValue = lang[propName];
        console.log(propValue);
        languages.push(propValue);
    }
  }
  const langList = languages.toString();
  return langList;
}

}
