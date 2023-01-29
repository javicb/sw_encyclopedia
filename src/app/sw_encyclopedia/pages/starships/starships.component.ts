import { Component } from '@angular/core';
import { Starship } from '../../interfaces/starship';
import { StarshipService } from '../../services/starship.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent {

  starships: Starship[] = [];

  constructor(private starshipService: StarshipService) { }

  ngOnInit() {
    this.getAllStarships();
  }

  getAllStarships() {
    this.starshipService.getAllStarships().subscribe(res => this.starships = res);
  }

}
