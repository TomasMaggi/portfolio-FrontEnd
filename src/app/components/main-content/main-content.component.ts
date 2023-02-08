import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
  logged: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // if jwt is defined means we are authenticated
    this.logged = localStorage.getItem('jwt') !== undefined;
  }
}
