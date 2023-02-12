import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { expand, reduce, tap } from "rxjs/operators";
import { Vehicle } from '../interfaces/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  baseUrl = 'https://app-starwarsapi-westeu-001.azurewebsites.net/api/Vehicles/';

  constructor(private http: HttpClient) { }

  // Get all vehicles if the results are paginated from the swapi.dev
  // getAllVehicles() {
  //   return this.http.get<any>(this.baseUrl).pipe(
  //     expand(response => response.next ? this.http.get(response.next) : EMPTY),
  //     reduce((acc, val: any) => acc.concat(val.results), [])
  //   );
  // }

  // Get all vehicles
  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<any>(this.baseUrl);
  }
}
