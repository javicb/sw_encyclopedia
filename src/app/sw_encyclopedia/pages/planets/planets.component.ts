import { Component } from '@angular/core';
import { Planet } from '../../interfaces/planet';
import { PlanetService } from '../../services/planet.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent {

  planets: Planet[] = [];
  isLoading = true;
  loadingIcon = './assets/images/Death_Star.png';

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getAllPlanets();
  }

  getAllPlanets() {
    this.planetService.getAllPlanets().subscribe(res => {
      this.planets = res;
      console.log(this.planets);
      if (this.planets.length > 0)
        this.isLoading = false;
    });
  }

}
