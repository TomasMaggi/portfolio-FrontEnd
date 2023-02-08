import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upper-menu',
  templateUrl: './upper-menu.component.html',
  styleUrls: ['./upper-menu.component.css'],
})
export class UpperMenuComponent implements OnInit {
  isLogged = localStorage.getItem('jwt') !== null;

  logout() {
    localStorage.removeItem('jwt');
    window.location.reload();
  }

  constructor() {}

  ngOnInit(): void {}
}
