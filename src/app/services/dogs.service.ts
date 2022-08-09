import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DogImage } from '../DogImage';

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
}
