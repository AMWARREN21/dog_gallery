import { Component, OnInit } from '@angular/core';
import { DogsService } from 'dog-img-app/src/app/services/dogs.service';
import { DogBreedList } from '../../models/DogImage';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  dogBreeds: DogBreedList = {
    message: {},
    status: ''
  };

  Object = Object

  constructor(private DogsService: DogsService) { }

  ngOnInit(): void {
    this.DogsService.getAllBreeds().subscribe((dogs: any) => {
      (this.dogBreeds.message = dogs['message'])
    })
  }

}
