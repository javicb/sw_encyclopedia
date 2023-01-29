import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, expand, reduce } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  baseUrl = 'https://swapi.dev/api/starships/';

  constructor(private http: HttpClient) { }

  // Get all starships
  getAllStarships() {
    return this.http.get<any>(this.baseUrl).pipe(
      expand(response => response.next ? this.http.get(response.next) : EMPTY),
      reduce((acc, val: any) => acc.concat(val.results), [])
    );
  }
}
