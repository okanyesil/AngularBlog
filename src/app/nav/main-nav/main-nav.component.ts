import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
enum MainPage
{
  home = 1,
  about_me= 2,
  contanct = 3
}
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  pageActive: MainPage;
  constructor(private router: Router) {
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        if (value.url.indexOf('anasayfa') > 0) {
          this.pageActive = MainPage.home;
        }
        else if (value.url.indexOf(('hakkimda')) > 0) {
          this.pageActive = MainPage.about_me;
        }
        else if (value.url.indexOf('iletisim') > 0) {
          this.pageActive = MainPage.contanct;
        } else {
          this.pageActive = MainPage.home;
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
