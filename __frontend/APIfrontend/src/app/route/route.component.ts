import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  showDropdown: boolean = false;

  menuList: Array<{ label: string, url: string }> = [
    { label: 'Kölcsönzők', url: '/users' },
    { label: 'Szerzők', url: '/authors' },
    { label: 'Könyvek', url: '/books' },
    { label: 'Műfaj', url: '/genere' },
    { label: 'Kölcsönzések', url: '/rents' }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  disableClick(event: MouseEvent) {
    event.preventDefault();
  }

}