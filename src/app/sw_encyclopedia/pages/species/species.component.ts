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
  isLoading = true;

  constructor(private speciesService: SpeciesService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getAllSpecies();
  }

  getAllSpecies() {
    this.speciesService.getAllSpecies().subscribe(res => {
      this.species = res;
      if (this.species.length > 0)
        this.isLoading = false;
    });
  }

}
