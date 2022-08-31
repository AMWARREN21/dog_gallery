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

  private apiUrl = 'https://dog.ceo/api'

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  getRandomImages(): Observable<DogImages> {
    return this.http.get<DogImages>(`${this.apiUrl}/breeds/image/random/20`)
  }

  getAllBreeds(): Observable<DogImages> {
    return this.http.get<DogImages>(`${this.apiUrl}/breeds/list/all`)
  }

  getSubreedImages(breed: string | undefined, subBreed: string | null): Observable<DogImages> {
    return this.http.get<DogImages>(`${this.apiUrl}/breed/${breed}/${subBreed}/images/random/20`)
  }

  getBreedImages(breed: string | undefined): Observable<DogImages> {
    return this.http.get<DogImages>(`${this.apiUrl}/breed/${breed}/images/random/20`)
  }

  openModal($event: Event) {
    this.dialog.open(DogModalComponent, {
      data: {
        image: ($event.target as HTMLImageElement).src
      }
    })
  }
}
