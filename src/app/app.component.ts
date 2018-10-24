import {Component, OnInit} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {LoggerService} from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  datum = new Date();
  price = 1000.95;
  pi = Math.PI;
  array = ['Hallo', 'Welt'];
  obj = {firstname: 'Bob', lastname: 'Marley'};
  money: string;
  private _money = 10.99;
  name = 'Bob Marley Jr.';
  people: Array<{ name: string }> = [];

  constructor(private currencyPipe: CurrencyPipe, private http: HttpClient, private logger: LoggerService) {

  }

  ngOnInit(): void {
    this.money = this.currencyPipe.transform(this._money, 'EUR');
    this.http.get<{ results: Array<{ name: string }> }>('https://swapi.co/api/people').subscribe(
      response => {
        this.people = response.results;
        this.logger.log('Next');
      }, error => {
        this.logger.error('Error');
      },
      () => {
        this.logger.info('Completed');
      }
    );
  }
}
