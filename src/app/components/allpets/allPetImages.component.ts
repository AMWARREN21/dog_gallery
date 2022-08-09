import { Component, OnInit, Output } from '@angular/core';
import { DogsService } from '../../services/dogs.service'
import { DogImage } from '../../DogImage';

@Component({
  selector: 'app-allpets',
  templateUrl: './allPetImages.component.html',
  styleUrls: ['./allPetImages.component.css']
})

export class AllPetImagesComponent implements OnInit {

  dogImages: DogImage[] = [];
  modalImage: string = ''

  getImg($event: Event) {
    this.modalImage = ($event.target as HTMLImageElement).src
    console.log(this.modalImage)
  }

  constructor(private DogsService: DogsService) { }

  ngOnInit(): void {
    this.DogsService.getRandomImages().subscribe((dogs) => {
      (this.dogImages = dogs['message'])
    })
  }
}
