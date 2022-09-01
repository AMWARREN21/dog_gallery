import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DogImages } from '../models/DogImage';
import { DogModalComponent } from '../shared/components/dog-modal/dog-modal.component';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  //declaring url to use later
  apiUrl = 'https://dog.ceo/api'

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  //function to get 20 random images
  getRandomImages(): Observable<DogImages> {
    return this.http.get<DogImages>(`${this.apiUrl}/breeds/image/random/20`)
  }

  //function to get all dog breeds
  getAllBreeds(): Observable<DogImages> {
    return this.http.get<DogImages>(`${this.apiUrl}/breeds/list/all`)
  }

  //function to get a random 20 sub-breed images
  getSubreedImages(breed: string | undefined, subBreed: string | null): Observable<DogImages> {
    return this.http.get<DogImages>(`${this.apiUrl}/breed/${breed}/${subBreed}/images/random/20`)
  }

  //function to get a random 20 breed images
  getBreedImages(breed: string | undefined): Observable<DogImages> {
    return this.http.get<DogImages>(`${this.apiUrl}/breed/${breed}/images/random/20`)
  }

  //function to open modal so it can be accessed my multiple components
  openModal($event: Event) {
    this.dialog.open(DogModalComponent, {
      data: {
        image: ($event.target as HTMLImageElement).src
      }
    })
  }
}
