import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material.module';

import { AllPetImagesComponent } from './allPetImages.component';

describe('AllpetsComponent', () => {

    let component: AllPetImagesComponent;
    let fixture: ComponentFixture<AllPetImagesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                MaterialModule
            ],
            declarations: [AllPetImagesComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AllPetImagesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create all pets component', () => {
        expect(component).toBeTruthy();
    });

});
