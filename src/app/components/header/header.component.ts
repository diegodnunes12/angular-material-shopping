import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onClickNavigateHome() {
    this.router.navigate([""])
  }

  public onClickNavigateFavorites() {
    this.router.navigate(["favorites"])
  }

}
