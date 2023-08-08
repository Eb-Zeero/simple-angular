import { Component, OnInit } from '@angular/core';
import {AppService} from '../services/app.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  message = '';
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getHelloWorld(true).subscribe(
      (word) => {
        this.message = word.message;
        },
      () => {this.message = 'failed'; });
  }

}
