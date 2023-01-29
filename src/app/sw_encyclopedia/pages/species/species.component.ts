import { Component } from '@angular/core';
import { Species } from '../../interfaces/species';
import { SpeciesService } from '../../services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent {

  species: Species[] = [];

  constructor(private speciesService: SpeciesService) { }

  ngOnInit() {
    this.getAllSpecies();
  }

  getAllSpecies() {
    this.speciesService.getAllSpecies().subscribe(res => this.species = res);
  }

}
