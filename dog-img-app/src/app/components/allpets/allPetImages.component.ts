import { Component, OnInit } from '@angular/core';
import { DogModalComponent } from '../dog-modal/dog-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { DogsService } from '../../services/dogs.service'
import { DogImage } from '../../models/DogImage';

@Component({
  selector: 'app-allpets',
  templateUrl: './allPetImages.component.html',
  styleUrls: ['./allPetImages.component.css']
})

export class AllPetImagesComponent implements OnInit {

  dogImages: DogImage[] = [];
  modalImage: string = ''


  constructor(private DogsService: DogsService, public dialog: MatDialog) { }

  openModal($event: Event) {
    this.modalImage = ($event.target as HTMLImageElement).src
    console.log(this.modalImage)
    this.dialog.open(DogModalComponent, {
      data: {
        image: this.modalImage
      }
    })
  }

  ngOnInit(): void {
    this.DogsService.getRandomImages().subscribe((dogs) => {
      (this.dogImages = dogs['message'])
    })
  }
}
