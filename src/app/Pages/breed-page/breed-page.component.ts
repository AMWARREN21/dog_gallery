import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogsService } from 'src/app/services/dogs.service';
import { MatDialog } from '@angular/material/dialog';
import { DogModalComponent } from 'src/app/components/dog-modal/dog-modal.component';

@Component({
  selector: 'app-breed-page',
  templateUrl: './breed-page.component.html',
  styleUrls: ['../../components/allpets/allPetImages.component.css']
})
export class BreedPageComponent implements OnInit {

  breedImages: any = ''
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
      this.DogsService.getBreedImages(breed).subscribe((image) => {
        this.breedImages = image['message']
      })
    })
  }
}
