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

      },
      {
        label: 'Personajes',

      },
      {
        label: 'Planetas',

      },
      {
        label: 'Especies',

      },
      {
        label: 'Naves',

      },
      {
        label: 'Vehiculos',

      }
    ];
  }
}
