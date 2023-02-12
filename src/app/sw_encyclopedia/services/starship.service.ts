import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { expand, reduce, tap } from "rxjs/operators";
import { Starship } from '../interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  baseUrl = 'https://app-starwarsapi-westeu-001.azurewebsites.net/api/Starships/';

  constructor(private http: HttpClient) { }

  // Get all starships if the results are paginated from the swapi.dev
  // getAllStarships() {
  //   return this.http.get<any>(this.baseUrl).pipe(
  //     expand(response => response.next ? this.http.get(response.next) : EMPTY),
  //     reduce((acc, val: any) => acc.concat(val.results), [])
  //   );
  // }

  // Get all starships
  getAllStarships(): Observable<Starship[]> {
    return this.http.get<any>(this.baseUrl);
  }
}
