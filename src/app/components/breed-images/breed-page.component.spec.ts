import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { BreedPageComponent } from './breed-page.component';
import { MaterialModule } from '../../material.module';

describe('BreedPageComponent', () => {
    let component: BreedPageComponent;
    let fixture: ComponentFixture<BreedPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                MaterialModule,
                RouterTestingModule
            ],
            declarations: [BreedPageComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(BreedPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create breed component', () => {
        expect(component).toBeTruthy();
    });
});
