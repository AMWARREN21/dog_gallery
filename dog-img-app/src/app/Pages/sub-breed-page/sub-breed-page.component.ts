import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogsService } from 'dog-img-app/src/app/services/dogs.service';
import { MatDialog } from '@angular/material/dialog';
import { DogModalComponent } from 'dog-img-app/src/app/components/dog-modal/dog-modal.component';

@Component({
  selector: 'app-sub-breed-page',
  templateUrl: './sub-breed-page.component.html',
  styleUrls: ['../../components/allpets/allPetImages.component.css']
})
export class SubBreedPageComponent implements OnInit {

  subBreedImages: any = ''
  modalImage: any = ''

  constructor(private route: ActivatedRoute, private DogsService: DogsService, private dialog: MatDialog) { }

  openModal($event: Event) {
    this.modalImage = ($event.target as HTMLImageElement).src
    console.log(this.modalImage)
    this.dialog.open(DogModalComponent, {
      data: {
        image: this.modalImage
      }
    })
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let breed: any = params.get('breed')
      let subBreed = params.get('subBreed')
      this.DogsService.getSubreedImages(breed, subBreed).subscribe((image) => {
        this.subBreedImages = image['message']
      })
    })
  }
}