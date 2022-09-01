import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service'
import { DogImages } from '../../models/DogImage';

@Component({
  selector: 'app-allpets',
  templateUrl: '../../shared/components/dog-images-template/dog-images.component.html',
  styleUrls: ['./allPetImages.component.css']
})

export class AllPetImagesComponent implements OnInit {

  //instance of dog images model
  dogImages: DogImages = {
    message: [],
    status: ''
  };

  constructor(public DogsService: DogsService) { }

  ngOnInit(): void {
    //call service to getRandomImages and have the dogImages instance = result
    this.DogsService.getRandomImages().subscribe((dogs) => (this.dogImages.message = dogs.message))
  }
}
