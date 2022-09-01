import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogsService } from '../../services/dogs.service';
import { DogImages } from '../../models/DogImage';

@Component({
  selector: 'app-breed-page',
  templateUrl: '../../shared/components/dog-images-template/dog-images.component.html',
  styleUrls: ['../../components/allpets/allPetImages.component.css']
})
export class BreedPageComponent implements OnInit {

  //instance of dog images model
  dogImages: DogImages = {
    message: [],
    status: ''
  }

  constructor(private route: ActivatedRoute, public DogsService: DogsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //get the breed name from url
      let breed: any = params.get('breed')
      console.log(`Breed: ${breed}`)
      //call service to getBreedImages and have the dogImages instance = result
      this.DogsService.getBreedImages(breed).subscribe((image) => {
        this.dogImages.message = image['message']
      })
    })
  }
}
