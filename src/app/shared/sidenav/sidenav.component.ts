import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../../app/services/dogs.service';
import { DogBreedList } from '../../models/DogImage';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  //instance of dog breed list model
  dogBreeds: DogBreedList = {
    message: {},
    status: ''
  };

  constructor(private DogsService: DogsService) { }

  ngOnInit(): void {
    //call service to getallbreeds and have the dogBreeds instance = result
    this.DogsService.getAllBreeds().subscribe((dogs: any) => {
      (this.dogBreeds.message = dogs['message'])
    })
  }

}
