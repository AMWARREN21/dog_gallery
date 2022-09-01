import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DogsService } from './dogs.service';
import { HttpClientModule } from '@angular/common/http';
import { DogModalComponent } from '../shared/components/dog-modal/dog-modal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('DogsService', () => {
    let service: DogsService;
    let httpMock: HttpTestingController
    let modal: ComponentFixture<DogModalComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useClass: TranslateFakeLoader
                    }
                }),
                HttpClientModule,
                HttpClientTestingModule,
                MaterialModule,
                BrowserAnimationsModule
            ],
            declarations: [
                DogModalComponent
            ],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: MatDialogRef, useValue: {} }
            ]
        });
        service = TestBed.inject(DogsService);
        httpMock = TestBed.inject(HttpTestingController)
    });

    afterEach(() => {
        httpMock.verify()
    })

    it('should create dogs service', () => {
        expect(service).toBeTruthy();
    });

    it('should get random images from API', () => {

        const testImage: any = {
            "message": [
                "https://images.dog.ceo/breeds/buhund-norwegian/hakon1.jpg"
            ],
            "status": "success"
        }

        service.getRandomImages().subscribe(image => {
            expect(image).toEqual(testImage)
        })

        const request = httpMock.expectOne(`${service.apiUrl}/breeds/image/random/20`)
        expect(request.request.method).toBe('GET')
        request.flush(testImage)
    })

    it('should get all dog breeds from API', () => {
        const testBreeds: any = {
            "message": {
                "beage": []
            },
            "status": "success"
        }

        service.getAllBreeds().subscribe(breed => {
            expect(breed).toEqual(testBreeds)
        })

        const request = httpMock.expectOne(`${service.apiUrl}/breeds/list/all`)
        expect(request.request.method).toBe('GET')
    })

    it('should get breed images from API', () => {
        const testImage: any = {
            "message": [
                "https://images.dog.ceo/breeds/hound-afghan/n02088094_875.jpg",
            ],
            "status": "success"
        }

        service.getBreedImages('hound').subscribe(image => {
            expect(image).toEqual(testImage)
        })

        const request = httpMock.expectOne(`${service.apiUrl}/breed/hound/images/random/20`)
        expect(request.request.method).toBe('GET')
        request.flush(testImage)
    })

    it('should get sub-breed images from API', () => {
        const testImage: any = {
            "message": [
                "https://images.dog.ceo/breeds/hound-afghan/n02088094_875.jpg",
            ],
            "status": "success"
        }

        service.getSubreedImages('hound', 'afghan').subscribe(image => {
            expect(image).toEqual(testImage)
        })

        const request = httpMock.expectOne(`${service.apiUrl}/breed/hound/afghan/images/random/20`)
        expect(request.request.method).toBe('GET')
        request.flush(testImage)
    })

    it('should open modal', () => {

        const testImage: any = {
            "target": {
                "src": "https://images.dog.ceo/breeds/hound-afghan/n02088094_11432.jpg"
            }

        }
        service.openModal(testImage)
        modal = TestBed.createComponent(DogModalComponent);
        let component = modal.componentInstance;
        modal.detectChanges();

        expect(component).toBeTruthy()
    })

});
