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

  query: string = ''

  original: DogBreedList = {
    message: {},
    status: ''
  }

  constructor(private DogsService: DogsService) { }

  // Object.keys(dogBreeds.message).filter(())

  getResults(event: any) {
    this.query = event
    this.filter()
  }

  filter() {
    let filterObj = this.original.message
    this.dogBreeds.message = {}
    for (let key of Object.keys(filterObj)) {
      if (key.includes(this.query)) {
        // console.log(key)
        this.dogBreeds.message[key] = filterObj[key]
      }
    }

    console.log(this.dogBreeds.message)
  }

  ngOnInit(): void {

    //call service to getallbreeds and have the dogBreeds instance = result
    this.DogsService.getAllBreeds().subscribe((dogs: any) => {
      // Object.keys(dogBreeds.message).filter(())
      this.dogBreeds.message = dogs['message']
      this.original.message = dogs['message']

      this.filter()
    })
  }

}
