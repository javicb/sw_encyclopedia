import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { expand, reduce, tap } from "rxjs/operators";
import { Planet } from '../interfaces/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  baseUrl = 'https://app-starwarsapi-westeu-001.azurewebsites.net/api/Planets/';

  constructor(private http: HttpClient) { }

  // Get all people if the results are paginated from the swapi.dev
  // getAllPlanets() {
  //   return this.http.get<any>(this.baseUrl).pipe(
  //     expand(response => response.next ? this.http.get(response.next) : EMPTY),
  //     reduce((acc, val: any) => acc.concat(val.results), [])
  //   );
  // }

  // Get all planets
  getAllPlanets(): Observable<Planet[]> {
    return this.http.get<any>(this.baseUrl);
  }
}
