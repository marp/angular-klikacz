import { Component, OnInit } from '@angular/core';
import { ClickService } from './services/click.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ ]
})
export class AppComponent implements OnInit {
  title = 'klikacz';
  allClicks: number;
  constructor(private clickService: ClickService) { }

  ngOnInit() {
    this.clickService.getSum().subscribe(e => {
      this.allClicks = e;
    });
  }

}
