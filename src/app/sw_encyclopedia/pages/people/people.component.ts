import { Component } from '@angular/core';
import { People } from '../../interfaces/people';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  peoples: People[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.getAllPeople();
  }

  getAllPeople() {
    this.peopleService.getAllPeople().subscribe(res => this.peoples = res);
  }

}
