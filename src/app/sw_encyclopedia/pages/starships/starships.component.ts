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
  isLoading = true;

  constructor(private starshipService: StarshipService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getAllStarships();
  }

  getAllStarships() {
    this.starshipService.getAllStarships().subscribe(res => {
      this.starships = res;
      console.log(this.starships);
      if (this.starships.length > 0)
        this.isLoading = false;
    });
  }

}
