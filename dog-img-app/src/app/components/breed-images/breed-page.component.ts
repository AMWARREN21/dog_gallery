import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogsService } from 'dog-img-app/src/app/services/dogs.service';
import { DogImages } from '../../models/DogImage';

@Component({
  selector: 'app-breed-page',
  templateUrl: '../../shared/components/dog-images-template/dog-images.component.html',
  styleUrls: ['../../components/allpets/allPetImages.component.css']
})
export class BreedPageComponent implements OnInit {

  dogImages: DogImages = {
    message: [],
    status: ''
  }

  constructor(private route: ActivatedRoute, public DogsService: DogsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let breed: any = params.get('breed')
      this.DogsService.getBreedImages(breed).subscribe((image) => {
        this.dogImages.message = image['message']
      })
    })
  }
}
