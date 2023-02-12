import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { expand, reduce, tap } from "rxjs/operators";
import { People } from '../interfaces/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  baseUrl = 'https://app-starwarsapi-westeu-001.azurewebsites.net/api/People/';

  constructor(private http: HttpClient) { }

  // Get all people if the results are paginated from the swapi.dev
  // getAllPeople(): Observable<People[]> {
  //   return this.http.get<any>(this.baseUrl).pipe(
  //     expand(response => response.next ? this.http.get(response.next) : EMPTY),
  //     reduce((acc, val: any) => acc.concat(val.results), [])
  //   );
  // }

  // Get all people
  getAllPeople(): Observable<People[]> {
    return this.http.get<any>(this.baseUrl);
  }
}
