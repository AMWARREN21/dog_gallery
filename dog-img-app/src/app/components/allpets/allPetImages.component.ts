import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service'
import { DogImages } from '../../models/DogImage';

@Component({
  selector: 'app-allpets',
  templateUrl: '../../shared/components/dog-images-template/dog-images.component.html',
  styleUrls: ['./allPetImages.component.css']
})

export class AllPetImagesComponent implements OnInit {

  dogImages: DogImages = {
    message: [],
    status: ''
  };

  constructor(public DogsService: DogsService) { }

  ngOnInit(): void {
    this.DogsService.getRandomImages().subscribe((dogs) => (this.dogImages.message = dogs.message))
  }
}
