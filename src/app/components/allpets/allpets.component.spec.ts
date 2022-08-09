import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPetImagesComponent } from './allPetImages.component';

describe('AllpetsComponent', () => {
  let component: AllPetImagesComponent;
  let fixture: ComponentFixture<AllPetImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllPetImagesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AllPetImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
