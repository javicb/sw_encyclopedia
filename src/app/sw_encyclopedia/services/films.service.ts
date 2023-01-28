import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Films } from '../interfaces/films';
import { EMPTY, Observable } from 'rxjs';
import { expand, reduce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  baseUrl = 'https://swapi.dev/api/films/';

  constructor(private http: HttpClient) { }

  // Gete all films
  getFilms(): Observable<Films[]> {
    return this.http.get<any>(this.baseUrl).pipe(
      expand(response => response.next ? this.http.get(response.next) : EMPTY),
      reduce((acc, val: any) => acc.concat(val.results), [])
    );
  }

}
