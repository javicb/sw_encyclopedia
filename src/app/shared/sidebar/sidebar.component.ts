import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Peliculas',
        routerLink: 'films'
      },
      {
        label: 'Personajes',
        routerLink: 'people'
      },
      {
        label: 'Planetas',
        routerLink: 'planets'
      },
      {
        label: 'Especies',
        routerLink: 'species'
      },
      {
        label: 'Naves',
        routerLink: 'starships'
      },
      {
        label: 'Vehiculos',
        routerLink: 'vehicles'
      }
    ];
  }
}
