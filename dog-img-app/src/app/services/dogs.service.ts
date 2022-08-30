import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { DogImage } from '../models/DogImage';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  private apiUrl = 'https://dog.ceo/api'

  constructor(private http: HttpClient) { }

  getRandomImages(): Observable<DogImage> {
    return this.http.get<DogImage>(`${this.apiUrl}/breeds/image/random/20`)
  }

  getAllBreeds(): Observable<DogImage> {
    return this.http.get<DogImage>(`${this.apiUrl}/breeds/list/all`)
  }

  getSubreedImages(breed: string | undefined, subBreed: string | null): Observable<DogImage> {
    return this.http.get<DogImage>(`${this.apiUrl}/breed/${breed}/${subBreed}/images/random/20`)
  }

  getBreedImages(breed: string | undefined): Observable<DogImage> {
    return this.http.get<DogImage>(`${this.apiUrl}/breed/${breed}/images/random/20`)
  }
}
