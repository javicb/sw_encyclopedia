import { Component } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {

  vehicles: Vehicle[] = [];
  isLoading = true;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getAllVehicles();
  }

  getAllVehicles() {
    this.vehicleService.getAllVehicles().subscribe(res => {
      this.vehicles = res;
      if (this.vehicles.length > 0)
        this.isLoading = false;
    });
  }

}
