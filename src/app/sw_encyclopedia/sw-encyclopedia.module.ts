import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { SpeciesComponent } from './pages/species/species.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { PeopleComponent } from './pages/people/people.component';
import { FilmsComponent } from './pages/films/films.component';



@NgModule({
  declarations: [
    FilmsComponent,
    PeopleComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    FilmsComponent,
    PeopleComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
  ]
})
export class SwEncyclopediaModule { }
