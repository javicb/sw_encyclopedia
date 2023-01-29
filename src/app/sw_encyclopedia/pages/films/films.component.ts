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
  isLoading = true;

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getFilms();
  }

  // Get all films
  getFilms() {
    this.filmsService.getFilms().subscribe(res => {
      this.films = res;
      if (this.films.length > 0)
        this.isLoading = false;
    });
  }

}
