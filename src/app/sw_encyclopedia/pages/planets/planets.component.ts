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

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.getAllPlanets();
  }

  getAllPlanets() {
    this.planetService.getAllPlanets().subscribe(res => this.planets = res);
  }

}
