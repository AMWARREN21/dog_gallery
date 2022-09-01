import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material.module';


import { SubBreedPageComponent } from './sub-breed-page.component';

describe('SubBreedPageComponent', () => {
    let component: SubBreedPageComponent;
    let fixture: ComponentFixture<SubBreedPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientModule,
                MaterialModule
            ],
            declarations: [SubBreedPageComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SubBreedPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create sub-breed component', () => {
        expect(component).toBeTruthy();
    });
});
