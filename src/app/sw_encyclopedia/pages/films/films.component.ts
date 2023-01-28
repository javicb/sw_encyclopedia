import { Component, ViewChild } from '@angular/core';
import { Films } from '../../interfaces/films';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  films: Films[] = [];

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.getFilms();
  }

  // Get all films
  getFilms() {
    this.filmsService.getFilms().subscribe((data: any) => {
      this.films = data;
    });
  }

}
