import { Component, OnInit, ElementRef } from '@angular/core';

import { interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private future: Date;
  private futureString: string;
  private diff: number;
  private $counter: Observable<number>;
  private subscription: Subscription;
  private message: string;

  constructor(elm: ElementRef) {
    // this.futureString = elm.nativeElement.getAttribute('inputDate');
    this.futureString = "August 3, 2018 18:00:00";
  }

  dhms(t) {
    let days, hours, minutes, seconds;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    return [
      days + 'd',
      hours + 'h',
      minutes + 'm',
      seconds + 's'
    ].join(' ');
  }

  ngOnInit() {
    this.message = "Loading...."
    this.future = new Date(this.futureString);
    this.$counter = interval(1000).pipe(
      map((x) => {
        this.diff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
        return x;
      })
    )

    this.subscription = this.$counter
      .subscribe((x) => this.message = this.dhms(this.diff));
  }
}
