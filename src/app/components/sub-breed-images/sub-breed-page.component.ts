import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogsService } from '../../services/dogs.service';
import { DogImages } from '../../models/DogImage';

@Component({
  selector: 'app-sub-breed-page',
  templateUrl: '../../shared/components/dog-images-template/dog-images.component.html',
  styleUrls: ['../../components/allpets/allPetImages.component.css']
})
export class SubBreedPageComponent implements OnInit {

  //instance of dog images model
  dogImages: DogImages = {
    message: [],
    status: ''
  }

  constructor(private route: ActivatedRoute, public DogsService: DogsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //get the breed name and sub-breed name from url
      let breed: any = params.get('breed')
      let subBreed = params.get('subBreed')
      //call service to getSubreedImages and have the dogImages instance = result
      this.DogsService.getSubreedImages(breed, subBreed).subscribe((image) => {
        this.dogImages.message = image['message']
      })
    })
  }
}