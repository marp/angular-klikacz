import { Component, OnInit } from '@angular/core';
import { ClickService } from '../services/click.service';

@Component({
  selector: 'app-klikacz1',
  templateUrl: './klikacz1.component.html',
  styleUrls: ['./klikacz1.component.sass']
})
export class Klikacz1Component implements OnInit {


  click = 0;
  constructor(private clickService: ClickService) { }

  ngOnInit() {
  }

  add() {
    this.click += 1;
    this.clickService.addClicks();
  }

}
